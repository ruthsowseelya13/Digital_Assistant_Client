/**
 * Author: Yureswar Ravuri
 * Type: Component
 * Objective: To render recorded sequences
 * Associated Route/Usage: *
 */

import React, {useEffect, useState} from "react";
import {DeleteOutlined, InfoCircleOutlined} from "@ant-design/icons";
import _ from "lodash";
import {getObjData, setToStore} from "../util";
import {postRecordSequenceData, profanityCheck, recordClicks} from "../services/recordService";
import {CONFIG} from "../config";
import SelectedElement from "./SelectedElement";

import TSON from "typescript-json";
import {translate} from "../util/translation";
import {isHighlightNode} from "../util/checkNode";
import {Alert, Progress, Space, Switch} from "antd";
import {UDAConsoleLogger, UDAErrorLogger} from "../config/error-log";
import {addNotification} from "../util/addNotification";
import EditableStepForm from "./EditableStepForm";
import {hasValidScreenInfo} from "../util/hasValidScreenInfo";

export interface MProps {
    sequenceName?: string;
    isShown?: boolean;
    hide?: () => void;
    data?: any;
    config?: any;
    refetchSearch?: Function;
    recordHandler?: Function;
    showLoader?: Function;
}

/**
 * To render recorded sequence elements
 * @returns HTML Elements
 */

export const RecordedData = (props: MProps) => {
    const [name, setName] = useState<string>("");
    const [labels, setLabels] = useState<any>([]);
    const [disableForm, setDisableForm] = useState<boolean>(false);
    const [recordData, setRecordData] = useState<any>(props.data || []);
    const [advBtnShow, setAdvBtnShow] = useState<boolean>(false);
    const [tmpPermissionsObj, setTmpPermissionsObj] = useState<any>({});
    const [inputAlert, setInputAlert] = useState<any>({});
    const [inputError, setInputError] = useState<any>({});
    const [tooltip, setToolTip] = useState<string>("");
    const [disableTooltipSubmitBtn, setDisableTooltipSubmitBtn] = useState<boolean>(false);
    const [inputAt, setInputAt] = useState<string>('');
    const [formSubmit, setFormSubmit] = useState<boolean>(false);
    const [checkingProfanity, setCheckingProfanity] = useState<boolean>(false);
    // variable for uploading percentage data
    const [savedClickedDataPercent, setSavedClickedDataPercent] = useState<number>(0);
    const [savingError, setSavingError] = useState<boolean>(false);
    const [slowPlayback, setSlowPlayback] = useState<boolean>(false);
    const [delayPlaybackTime, setDelayPlaybackTime] = useState<number>(1);

    // variable for setting screen information availability
    const [screenInfoNotAvailable, setScreenInfoNotAvailable] = useState<boolean>(false);

    useEffect(() => {
        setRecordData([...(props.data || [])]);
    }, [props.data]);

    useEffect(() => {
        let permissions = {...props?.config?.permissions};
        setTmpPermissionsObj(permissions);
    }, [props.config.permissions]);

    /**
     * Effect hook to validate screen information availability in recorded data
     *
     * This effect monitors changes to the recordData array and performs validation
     * on the most recent record to determine if valid screen information is available.
     * It extracts the object data from the latest record and validates the screen
     * information using the hasValidScreenInfo utility function.
     *
     * The effect will:
     * 1. Check if recordData contains any records
     * 2. Extract object data from the most recent record
     * 3. Validate screen information in the node data
     * 4. Update the screenInfoNotAvailable state accordingly
     *
     * @dependencies [recordData] - Effect re-runs when recordData array changes
     */
    useEffect(() => {
        // Primary validation: Ensure recordData array exists and contains at least one record
        // This prevents accessing undefined array elements and ensures we have data to process
        if (recordData && recordData.length > 0) {

            // Extract object data from the most recent record (last item in array)
            // Using length-1 to get the latest recorded data entry for validation
            const originalNode = getObjData(recordData[recordData.length - 1]?.objectdata);

            // Debug logging: Output node information for development and troubleshooting
            // This helps developers understand the structure of the node data being processed
            UDAConsoleLogger.info(originalNode.node.nodeInfo, 4);

            // Screen information validation: Check if the extracted node contains valid screen data
            // Uses the hasValidScreenInfo utility to perform comprehensive validation
            // of screen size information including width, height, and nested object structure
            if (!hasValidScreenInfo(originalNode.node.nodeInfo)) {
                // State update: Set flag to indicate screen information is not available
                // This will likely trigger UI changes to handle the missing screen data scenario
                // The true value indicates that valid screen information is NOT available
                setScreenInfoNotAvailable(true);
            }
            // Note: If screen info IS valid, we don't explicitly set the state to false here
            // This suggests the state might be managed elsewhere or has a different default behavior
        }
        // Effect dependency: Re-run this effect whenever recordData changes
        // This ensures validation occurs whenever new records are added or the array is modified
    }, [recordData]);


    const storeRecording = (data: any) => {
        setRecordData([...data]);
        setToStore(data, CONFIG.RECORDING_SEQUENCE, false);
    };

    const setEdit = (index: number) => {
        if (props.config.enableEditClickedName === true) {
            recordData[index].editable = true;
            storeRecording(recordData);
        }
    };

    const checkProfanity = async (keyword: any) => {

        if (!props.config.enableProfanity) return keyword.trim();

        await setCheckingProfanity(true);
        const response: any = await profanityCheck(keyword);
        if (response.Terms && response.Terms.length > 0) {
            response.Terms.forEach(function (term) {
                keyword = keyword.replaceAll(term.Term, '');
            });
        }
        await setCheckingProfanity(false);
        if(formSubmit === true){
            submitRecording();
        }
        return keyword.trim();
    };

    /**check profanity for input text */
    const validateClickedInputName = async (index: number, inputValue: string) => {
        let valid: boolean = true;
        if (!validateInput(inputValue)) {
            setInputError({...inputError, clickedNodeName: true});
            valid = false;
        } else {
            setInputError({...inputError, clickedNodeName: false});
            valid = true;
        }

        await setInputAt('clickedNodeName');

        const _objData: any = getObjData(recordData[index]?.objectdata);
        _objData.meta.displayText = inputValue;
        recordData[index].objectdata = TSON.stringify(_objData);
        storeRecording(recordData);
        setRecordData([...recordData]);
        return valid;
    }


    /**
     * Check for each extra label entered in the
     * @param index
     * @param inputValue
     */
    const checkProfanityForGivenLabel = async (index: number, inputValue: string) => {
        if (!inputValue || inputValue === '') {
            return;
        }
        if (inputValue.trim() === '') {
            return;
        }
        let changedName: any = await checkProfanity(inputValue);
        if (inputValue.trim() !== changedName) {
            setInputAlert({...inputAlert, clickedInputNameProfanity: true});
        } else {
            setInputAlert({...inputAlert, clickedInputNameProfanity: false});
        }
        changedName = changedName.trim();
        await validateClickedInputName(index, changedName);
        if (changedName !== '') {
            delete recordData[index].profanity;
            await setInputAt('');
            const _objData: any = getObjData(recordData[index]?.objectdata);
            _objData.meta.displayText = inputValue;
            recordData[index].objectdata = TSON.stringify(_objData);
            if (!_.isEmpty(_objData)) {
                _objData.meta.displayText = changedName.trim();
                recordData[index].objectdata = TSON.stringify(_objData);
                storeRecording(recordData);
                await setRecordData([...recordData]);
                return true;
            }
        } else {
            return false;
        }
    };

    const handlePersonal = (index: number) => async () => {
        await updateRecordMetadata("isPersonal", index);
    };

    const handleSkipPlay = (index: number) => async () => {
        await updateRecordMetadata("skipDuringPlay", index);
    };

    const updateRecordMetadata = async (key: string, index: number, value: any = null) => {
        const _objData = getObjData(recordData[index]?.objectdata);
        if (_objData) {
            if(value === null) {
                if (_objData.meta[key] === undefined) _objData.meta[key] = false;
                _objData.meta[key] = !_objData.meta[key];
                recordData[index].objectdata = TSON.stringify(_objData);
            } else {
                if(value === '') {
                    delete _objData.meta[key];
                } else {
                    _objData.meta[key] = value;
                }
                recordData[index].objectdata = TSON.stringify(_objData);
            }
            storeRecording(recordData);
            setRecordData([...(recordData)]);
        }
    };

    const addLabel = () => {
        labels.push({label: ""});
    };

    /**
     * remove added label
     * @param index
     */
    const removeLabel = (index: number) => {
        labels.splice(index, 1);
        setLabels([...labels]);
    };

    const resetForm = async () => {
        await setDisableForm(false);
        await setName("");
        await setLabels([]);
        await setToolTip("");
        global.udanSelectedNodes = [];
        global.clickedNode = null;
        setSavedClickedDataPercent(0);
        setSavingError(false);
    }

    /**
     * cancel recording
     */
    const cancelRecording = async () => {
        await resetForm();
        if (props.recordHandler) {
            props.recordHandler("cancel");
        }
        setToStore([], CONFIG.RECORDING_SEQUENCE, false);
    };

    /**
     * submit the clicked input record to backend
     */
    const submitRecording = async () => {

        await setFormSubmit(true);

        //validate given input and check for profanity for all elements.

        if (checkingProfanity) {
            return false;
        }

        if (inputAt === 'mainLabel') {
            await checkMainLabelProfanity(name);
        }

        if (labels.length) {
            const _extraLabels = labels.map(async (label: any, index: number) => {
                if (label.label) {
                    if (inputAt === 'label' + index) {
                        await onExtraLabelChange(index, label.label);
                    }
                }
            });
        }

        if (inputAt === 'clickedNodeName') {
            let index = recordData?.length - 1;
            const _objData: any = getObjData(recordData[index]?.objectdata);
            let clickedName = _objData.meta.displayText ? _objData.meta.displayText : _objData.clickednodename;
            await checkProfanityForGivenLabel(index, clickedName);
        }

        if (name === "") {
            setInputAlert({...inputAlert, name: true});
            return false;
        } else {
            setInputAlert({...inputAlert, name: false});
        }

        if (name !== '') {
            if (!validateInput(name)) {
                setInputError({...inputError, name: true});
                return false;
            }
        }

        if (inputError.clickedNodeName) {
            return false;
        }

        setDisableForm(true);
        // props.showLoader(true);

        let validInput = true;

        let _labels: any = [name];
        if (labels.length) {
            const _extraLabels = labels.map((label: any) => {
                if (label.label) {
                    if (!validateInput(label.label)) {
                        validInput = false;
                    }
                    return label.label;
                }
            });
            _labels = [..._labels, ..._extraLabels];
        }

        if (!validInput) {
            return false;
        }

        const _payload: any = {
            name: TSON.stringify(_labels),
        };

        //add published status in payload
        if(global.UDAGlobalConfig.enableStatusSelection && !tmpPermissionsObj.hasOwnProperty('status')) {
            tmpPermissionsObj.enableStatus = 1;
        }

        //if additional params available send them part of payload
        if (!_.isEmpty(tmpPermissionsObj)) {
            _payload.additionalParams = tmpPermissionsObj;
        }

        // Save the original domain in which the recording has happened if enableForAllDomains flag is true
        if(global.UDAGlobalConfig.enableForAllDomains){
            if(_payload.hasOwnProperty('additionalParams')) {
                _payload.additionalParams = {
                    enableForAllDomains: true,
                    recordedDomain: window.location.host, ..._payload.additionalParams
                };
            } else {
                _payload.additionalParams = {
                    enableForAllDomains: true,
                    recordedDomain: window.location.host
                };
            }
        }

        // save delay playback time
        if(props.config.enableSlowReplay && slowPlayback){
            if(_payload.hasOwnProperty('additionalParams')) {
                _payload.additionalParams = {..._payload.additionalParams, slowPlaybackTime: delayPlaybackTime};
            } else {
                _payload.additionalParams = {slowPlaybackTime: delayPlaybackTime};
            }
        }

        /**
         * code for saving all the clicks from local storage to server. Looping all the clicked elements and sending to
         * server and
         */
        let totalClicks = recordData.length + 1;
        let savedClicks = 0;
        let failed = false;

        for (const [index, clickData] of Object.entries(recordData)) {
            if (clickData.hasOwnProperty('id')) {
                savedClicks++;
                setSavedClickedDataPercent((prevState) => {
                    return Math.ceil((savedClicks / totalClicks) * 100);
                });
                continue;
            }
            let resp = await recordClicks(clickData);
            if (resp && resp.id) {
                recordData[index] = resp;
                savedClicks++;
                setSavedClickedDataPercent((prevState) => {
                    return Math.ceil((savedClicks / totalClicks) * 100);
                });
            } else {
                await UDAErrorLogger.error('Failed to record the data.' + JSON.stringify(clickData));
                setSavingError(true);
                failed = true;
            }
        }

        storeRecording(recordData);

        if (failed) {
            setDisableForm(false);
            return;
        }

        try {
            const instance = await postRecordSequenceData(_payload);

            if (instance) {
                await resetForm();
                await setFormSubmit(false);

                setSavedClickedDataPercent((prevState) => {
                    return Math.ceil(((savedClicks + 1) / totalClicks) * 100);
                });

                addNotification(translate('savedSequence'), translate('savedSequenceDescription'), 'success');

                setTimeout(() => {
                    props.refetchSearch("on");
                }, CONFIG.indexInterval);
            } else {
                throw new Error('Failed to save sequence');
            }

            if (props.recordHandler) props.recordHandler("cancel");
            setToStore(false, CONFIG.RECORDING_SWITCH_KEY, true);
            setToStore([], CONFIG.RECORDING_SEQUENCE, false);

        } catch (error) {
            setFormSubmit(false);
            setDisableForm(false);
            UDAConsoleLogger.info('Save Sequence Error:', error);
            addNotification(translate('savedSequenceError'), translate('savedSequenceErrorDescription'), 'error');
        }
    };

    const [timer, setTimer] = useState(null);

    /**
     * validate and update of first label
     * @param value
     */
    const validateChange = async (value: string) => {
        await setName(value);
        if (!validateInput(value)) {
            await setInputError({...inputError, name: true});
            return false;
        } else {
            await setInputAlert({...inputAlert, name: false});
            await setInputError({...inputError, name: false});
            return true;
        }
    };

    /**
     * validate for profanity words and remove them
     * @param value
     */
    const checkMainLabelProfanity = async (value: string) => {
        if (value.trim() === '') {
            return;
        }
        let changedName: any = await checkProfanity(value);
        if (value.trim() !== changedName) {
            await setInputAlert({...inputAlert, mainLabelProfanity: true});
        } else {
            await setInputAlert({...inputAlert, mainLabelProfanity: false});
        }
        await setInputAt('');
        changedName = changedName.trim();
        await setName(changedName);
        return await validateChange(changedName);
    }

    /**
     * Validate and check profanity of label input
     * @param index
     */
    const onExtraLabelChange = async (index: number, value: string) => {
        let label: any;
        if (inputError['label' + index]) {
            label = inputError['label' + index];
        } else {
            inputError['label' + index] = {error: false};
            label = inputError['label' + index];
            await setInputError({...inputError});
        }

        labels[index].label = value;
        await setLabels([...labels]);

        if (!validateInput(value)) {
            label.error = true;
            inputError['label' + index] = label;
            await setInputError({...inputError});
            return false;
        } else {
            label.error = false;
            inputError['label' + index] = label;
            await setInputError({...inputError});
            return true;
        }

    };

    /**
     * validate for profanity words and remove them
     * @param index
     */
    const checkLabelProfanity = async (index: number, value: string) => {
        if (value.trim() === '') {
            return;
        }
        labels[index].label = await checkProfanity(value);
        labels[index].label = labels[index].label.trim();
        labels[index].profanity = false;
        if (value.trim() !== labels[index].label) {
            labels[index].profanity = true;
        } else {
            labels[index].profanity = false;
        }
        await setLabels([...labels]);
        await setInputAt('');
        return await onExtraLabelChange(index, labels[index].label);
    }

    /**
     * Validate input of given string
     * @param value
     */
    const validateInput = (value) => {
        if (value.length > 100) {
            return false;
        }
        let validateCondition = new RegExp("^[0-9A-Za-z _.-]+$");
        return (validateCondition.test(value));
    }

    /**
     * validate input change of tooltip
     * @param value string
     */
    const validateTooltip = async (value: string) => {
        await setToolTip(value);
        if (!validateInput(value)) {
            await setInputError({...inputError, tooltip: true});
            return false;
        } else {
            await setInputError({...inputError, tooltip: false});
            return true;
        }
    }

    const validateDelayTime = async(value: number, category: string = 'overAllDelayTime', index: number = null) => {
        if(!isNaN(value)){
            if(category === 'overAllDelayTime') {
                setDelayPlaybackTime(value);
            } else if(category === 'slowPlaybackTime' && index !== null) {
                updateRecordMetadata('slowPlaybackTime', index, value);
            }
        } else {
            setInputError({...inputError, slowPlayBackTime: true});
            if(category === 'slowPlaybackTime' && index !== null) {
                updateRecordMetadata('slowPlaybackTime', index, value);
            }
        }
    }

    /**
     *
     * @param value string
     * checking profanity words and removing them.
     */
    const onChangeTooltip = async (value: string) => {
        let changedName: any = await checkProfanity(value);
        changedName = changedName.trim();
        return await validateTooltip(changedName);
    };

    /**
     * Add custom tooltip to the clicked element
     * @param key
     * @param index
     */
    const updateTooltip = async (key: string, index: number) => {
        if(tooltip ===""){
            return;
        }
        if ((tooltip !== '') && (!validateInput(tooltip))) {
            await setInputError({...inputError, tooltip: true});
            return;
        }
        props.showLoader(true);
        await setDisableTooltipSubmitBtn(true);
        const _objData = getObjData(recordData[index]?.objectdata);
        if (_objData) {
            if (_objData.meta[key] === undefined) _objData.meta[key] = tooltip;
            _objData.meta[key] = tooltip
            recordData[index].objectdata = TSON.stringify(_objData);
            storeRecording(recordData);
            setToolTip("");
        }
        await setDisableTooltipSubmitBtn(false);
        props.showLoader(false);
    };

    const renderData = () => {
        if (!props.isShown) return;
        else
            return recordData?.map((item: any, index: number) => {
                let objectData = getObjData(item?.objectdata);
                let clickedName = (objectData.meta.hasOwnProperty('displayText')) ? objectData.meta.displayText : item.clickednodename;

                return (
                    <li
                        className="uda-recorded-label-editable completed"
                        key={`rec-seq-${index}`}
                    >
                        <div
                            className="flex-card flex-center"
                            style={{alignItems: "center"}}
                        >
                            {recordData?.length - 1 != index &&
                                <span id="uda-display-clicked-text" style={{flex: 2}}>
                                    {(objectData.meta.hasOwnProperty('displayText')) ? objectData.meta.displayText : item.clickednodename}
                                </span>
                            }
                        </div>

                        {recordData?.length - 1 === index && (
                            <EditableStepForm
                                item={item}
                                index={index}
                                recordData={recordData}
                                config={props.config}
                                isUpdateMode={false} // No save/cancel buttons in recording mode
                                storeRecording={storeRecording}
                                showLoader={props.showLoader}
                            />
                        )}
                    </li>
                );
            });
    };

    const toggleAdvanced = async () => {
        await setAdvBtnShow(!advBtnShow);
    };

    const handlePermissions = (obj: any) => async () => {
        let permissions = tmpPermissionsObj;
        if (permissions[obj.key]) {
            delete permissions[obj.key];
        } else {
            permissions[obj.key] = obj[obj.key];
        }
        await setTmpPermissionsObj({...permissions});
    };

    const displayKeyValue = (key: string, value: any) => {
        return <span>{key}:{value}</span>
    };

    return props?.isShown ? (
        <>
        {disableForm &&
            <>
                <div className="uda-card-details">
                    <Space wrap>
                        <Progress type="circle" percent={savedClickedDataPercent}
                                  status={savingError ? 'exception' : 'normal'}/>
                    </Space>
                </div>
            </>
        }
        {!disableForm &&
            <>
                <div className="uda-card-details">
                    {savingError && <Alert message={translate('savingError')} type="error"/>}
                    {screenInfoNotAvailable && <Alert message={translate('screenInfoError')} type="error"/>}
                    <h5>
                        <Space><span className="pulse"><InfoCircleOutlined /></span></Space>
                        {translate('recordSequenceHeading')}
                    </h5>
                    <hr style={{border: "1px solid #969696", width: "100%"}}/>
                    <ul className="uda-recording" id="uda-recorded-results">
                        {renderData()}
                    </ul>

                    <hr style={{border: "1px solid #969696", width: "100%"}}/>

                    {props.config.enableSlowReplay && <>

                    <div id="uda-play-slow-section">
                        <div className="flex-card flex-vcenter selectedElement">
                                <span className="col-6">
                                   {translate("enableDelayTimeText")}
                                </span>
                            <span className="uda_exclude col-6">
                                    <Switch defaultChecked={slowPlayback} onChange={()=> {setSlowPlayback(!slowPlayback);}} />
                                </span>
                        </div>
                        { (slowPlayback === true) &&
                            <div className="flex-card flex-vcenter selectedElement">
                                     <span style={{ marginRight: "4px" }} className="col-6">
                                        {translate('delayTimePlaceHolder')+" "}
                                    </span>
                                <input type="number" id="uda-add-slowplay" name="uda-edited-tooltip"
                                       className="uda-form-input uda_exclude col-6"
                                       placeholder={translate('delayTimePlaceHolder')}
                                       style={{width: "68% !important"}}
                                       onChange={async (e: any) => {
                                           await validateDelayTime(e.target.value);
                                       }}
                                       onBlur={async (e: any) => {
                                           await validateDelayTime(e.target.value);
                                       }}
                                       value={delayPlaybackTime}/>
                            </div>
                        }
                    </div>
                    </> }

                    <div style={{textAlign: "left"}}>
                        <input
                            type="text"
                            id="uda-recorded-name"
                            name="uda-save-recorded[]"
                            className={`uda-form-input uda_exclude`}
                            placeholder="Enter Label"
                            onChange={async (e: any) => {
                                await validateChange(e.target.value);
                                await setInputAt('mainLabel');
                            }}
                            onBlur={async (e: any) => {
                                await checkMainLabelProfanity(e.target.value);
                            }}
                            value={name}
                        />

                        {(inputAlert.mainLabelProfanity) &&
                            <span className={`uda-alert`}> {translate('profanityDetected')}</span>}
                        {inputAlert.name && <span className={`uda-alert`}> {translate('inputMandatory')}</span>}
                        {inputError.name && <span className={`uda-alert`}> {translate('inputError')}</span>}
                        <div id="uda-sequence-names">
                            {labels?.map((item: any, index: number) => {
                                return (
                                    <div key={`label-${index}`}>
                                        <div className="flex-card flex-center">
                                            <input
                                                type="text"
                                                id="uda-recorded-name"
                                                name="uda-save-recorded[]"
                                                className={`uda-form-input uda-form-input-reduced uda_exclude ${
                                                    item.profanity ? "profanity" : ""
                                                }`}
                                                placeholder="Enter Label"
                                                onChange={async (e: any) => {
                                                    await onExtraLabelChange(index, e.target.value);
                                                    await setInputAt('label' + index);
                                                }}
                                                onBlur={async (e: any) => {
                                                    await checkLabelProfanity(index, e.target.value);
                                                }}
                                                value={item.label}
                                            />
                                            <button
                                                className="delete-btn uda-remove-row uda_exclude"
                                                onClick={() => removeLabel(index)}
                                            >
                                                <DeleteOutlined/>
                                            </button>
                                        </div>
                                        <div className="flex-card flex-center">
                                            {(item.profanity) &&
                                                <span className={`uda-alert`}> {translate('profanityDetected')}
                                                    <br/></span>}
                                            {(inputError['label' + index] && inputError['label' + index].error) &&
                                                <span className={`uda-alert`}> {translate('inputError')}</span>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className=" add_lebel_btn_wrap">
                            <button className="add-btn uda_exclude" onClick={() => addLabel()}>
                                + {translate('addLabel')}
                            </button>
                        </div>

                        {props?.config?.enablePermissions && (
                            <div id="uda-permissions-section" style={{padding: "30px 0px"}}>
                                <br/>
                                <div>
                                    <button
                                        className="add-btn uda_exclude"
                                        onClick={() => toggleAdvanced()}
                                    >
                                        {advBtnShow ? translate('hidePermissions') : translate('showPermissions')}
                                    </button>
                                </div>

                                {
                                    advBtnShow &&
                                    <div>
                                        {Object.entries(props?.config?.permissions).map(([key, value]) => {
                                            return <div key={key}>
                                                <input
                                                    type="checkbox"
                                                    id="uda-recorded-name"
                                                    className="uda_exclude"
                                                    checked={tmpPermissionsObj[key] !== undefined}
                                                    onChange={handlePermissions({[key]: value, key})}
                                                />
                                                {displayKeyValue(key, value)}
                                            </div>
                                        })
                                        }
                                    </div>
                                }
                            </div>
                        )}

                        <div
                            className="flex-card flex-center"
                            style={{clear: "both", marginTop: 50}}
                        >
                            <div className="flex-card flex-start" style={{flex: 1}}>
                                <button
                                    className="uda-record-btn uda_exclude"
                                    onClick={() => {
                                        cancelRecording()
                                    }}
                                    style={{flex: 1}}
                                    disabled={disableForm}
                                >
                                    <span className="uda_exclude">{translate('cancelRecording')}</span>
                                </button>
                            </div>
                            <div className="flex-card flex-end" style={{flex: 1}}>
                                <button
                                    className={`uda-tutorial-btn uda_exclude ${
                                        (disableForm || screenInfoNotAvailable) ? "disabled" : ""
                                    }`}
                                    onClick={() => submitRecording()}
                                    disabled={disableForm || screenInfoNotAvailable}

                                    style={{flex: 1, marginLeft: "5px"}}
                                >
                                    {translate('submitButton')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
    </>) : null;
};
