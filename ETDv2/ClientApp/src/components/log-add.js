import React, {useState} from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
//import withRouter to use history to redirect a user to the logpage component.
import { createBrowserHistory } from 'history';

import { Box, FormControl, InputLabel, Grid, TextField, MenuItem, Select, Button } from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';

import axios from 'axios';

//here the query for the POST goes, to the API. therefore the object has to be created here and sent with the send button
// oh, and it also has to create a timestamp as the + button is pressed, and a timestampend when sent

const LogAdd = ({showState}) => {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [link, setLink] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [sourceType, setSourceType] = React.useState('');
    const [product, setProduct] = React.useState('');
    const [ttp, setTtp] = React.useState('');
    const [topics, setTopics] = React.useState('');
    const [uat, setUat] = React.useState('');
    const [tra, setTra] = React.useState('');

    const handleSourceChange = (event) => {
        setSourceType(event.target.value);
    };
    const handleProductChange = (event) => {
        setProduct(event.target.value);
    };
    const handleTtpChange = (event) => {
        setTtp(event.target.value);
    };
    const handleTopicsChange = (event) => {
        setTopics(event.target.value);
    };
    const handleUatChange = (event) => {
        setUat(event.target.value);
    };
    const handleTraChange = (event) => {
        setTra(event.target.value);
    };
    
    async function sendNewObject () {
        // let timestampStart = Date.now();
        let date = new Date();
        let timestampStart = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let newLog = {
            name: name,
            description: description,
            timestamp: timestampStart,
            agent: "landatalik",
            link: link,
            sourceType: sourceType,
            googleProduct: product,
            ttp: ttp,
            topics: topics,
            uat: uat,
            tra: tra,
            comment: comment,
            sourceInfoId: 81152
        }
        console.log("trying to send a new one");
        let res = await axios.post('http://localhost:44384/api/DataEventRecords', newLog);
    }

    return (
        <>
            <div className="log-add-box" style={{ display: (showState ? 'flex' : 'none') }}>
                <TextField className="log-add-box-name" label="Title"
                           onChange={(event) => {setName(event.target.value)}}/>
                <TextField className="log-add-box-description" label="Description"
                           onChange={(event) => {setDescription(event.target.value)}}/>
                <TextField className="log-add-box-link" label="Link"
                           onChange={(event) => {setLink(event.target.value)}}/>
                
                <div className="log-add-description">
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="sourceType-simple-select-label">Source Type</InputLabel>
                                    <Select
                                        labelId="sourceType-simple-select-label"
                                        id="sourceType-simple-select"
                                        value={sourceType}
                                        label="Source Type"
                                        onChange={handleSourceChange}
                                    >
                                        <MenuItem value={"News"}>News</MenuItem>
                                        <MenuItem value={"Blog"}>Blog</MenuItem>
                                        <MenuItem value={"Forum"}>Forum</MenuItem>
                                        <MenuItem value={"Black Market"}>Black Market</MenuItem>
                                        <MenuItem value={"Twitter"}>Twitter</MenuItem>
                                        <MenuItem value={"GitHub"}>GitHub</MenuItem>
                                        <MenuItem value={"Youtube"}>Youtube</MenuItem>
                                        <MenuItem value={"File Sharing Website"}>File Sharing Website</MenuItem>
                                        <MenuItem value={"Repository"}>Repository</MenuItem>
                                        <MenuItem value={"New ETD source"}>New ETD source</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="product-simple-select-label">Google Product</InputLabel>
                                    <Select
                                        labelId="product-simple-select-label"
                                        id="product-simple-select"
                                        value={product}
                                        label="Google Product"
                                        onChange={handleProductChange}
                                    >
                                        <MenuItem value={"Play"}>Play</MenuItem>
                                        <MenuItem value={"gMail"}>gMail</MenuItem>
                                        <MenuItem value={"gDrive"}>gDrive</MenuItem>
                                        <MenuItem value={"Apps Scripts"}>Apps Scripts</MenuItem>
                                        <MenuItem value={"Sheets"}>Sheets</MenuItem>
                                        <MenuItem value={"Docs"}>Docs</MenuItem>
                                        <MenuItem value={"Slides"}>Slides</MenuItem>
                                        <MenuItem value={"Forms"}>Forms</MenuItem>
                                        <MenuItem value={"v"}>Meet</MenuItem>
                                        <MenuItem value={"Employees"}>Employees</MenuItem>
                                        <MenuItem value={"Shopping"}>Shopping</MenuItem>
                                        <MenuItem value={"News"}>News</MenuItem>
                                        <MenuItem value={"Search engine"}>Search engine</MenuItem>
                                        <MenuItem value={"Assistant"}>Assistant</MenuItem>
                                        <MenuItem value={"Youtube"}>Youtube</MenuItem>
                                        <MenuItem value={"Android"}>Android</MenuItem>
                                        <MenuItem value={"News"}>News</MenuItem>
                                        <MenuItem value={"Chrome"}>Chrome</MenuItem>
                                        <MenuItem value={"AdWords"}>AdWords</MenuItem>
                                        <MenuItem value={"Adsense"}>Adsense</MenuItem>
                                        <MenuItem value={"N/A"}>N/A</MenuItem>
                                        <MenuItem value={"Chrome Web Store"}>Chrome Web Store</MenuItem>
                                        <MenuItem value={"XProducts"}>XProducts</MenuItem>
                                        <MenuItem value={"Potential Cloud Customers"}>Potential Cloud Customers</MenuItem>
                                        <MenuItem value={"GEO"}>GEO</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="ttp-simple-select-label">TTP</InputLabel>
                                    <Select
                                        labelId="ttp-simple-select-label"
                                        id="ttp-simple-select"
                                        value={ttp}
                                        label="TTP"
                                        onChange={handleTtpChange}
                                    >
                                        <MenuItem value={"SQL Injection"}>SQL Injection</MenuItem>
                                        <MenuItem value={"BotNet"}>BotNet</MenuItem>
                                        <MenuItem value={"Exploit"}>Exploit</MenuItem>
                                        <MenuItem value={"Exploit Kit"}>Exploit Kit</MenuItem>
                                        <MenuItem value={"Stealer"}>Stealer</MenuItem>
                                        <MenuItem value={"KeyLogger"}>KeyLogger</MenuItem>
                                        <MenuItem value={"Backdoor"}>Backdoor</MenuItem>
                                        <MenuItem value={"Worm"}>Worm</MenuItem>
                                        <MenuItem value={"Trojan"}>Trojan</MenuItem>
                                        <MenuItem value={"RootKit"}>RootKit</MenuItem>
                                        <MenuItem value={"Ransomware"}>Ransomware</MenuItem>
                                        <MenuItem value={"Hijacking"}>Hijacking</MenuItem>
                                        <MenuItem value={"Dropper"}>Dropper</MenuItem>
                                        <MenuItem value={"Weaponized Doc"}>Weaponized Doc</MenuItem>
                                        <MenuItem value={"Fileless"}>Fileless</MenuItem>
                                        <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                                        <MenuItem value={"Social Engineering"}>Social Engineering</MenuItem>
                                        <MenuItem value={"Zero-Day"}>Zero-Day</MenuItem>
                                        <MenuItem value={"Detection Bypass"}>Detection Bypass</MenuItem>
                                        <MenuItem value={"Sec. Layer Bypass"}>Sec. Layer Bypass</MenuItem>
                                        <MenuItem value={"Phishing"}>Phishing</MenuItem>
                                        <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="topics-simple-select-label">Topics</InputLabel>
                                    <Select
                                        labelId="topics-simple-select-label"
                                        id="topics-simple-select"
                                        value={topics}
                                        label="Topics"
                                        onChange={handleTopicsChange}
                                    >
                                        <MenuItem value={"Malware"}>Malware</MenuItem>
                                        <MenuItem value={"Bot Nets"}>Bot Nets</MenuItem>
                                        <MenuItem value={"Bad Apps"}>Bad Apps</MenuItem>
                                        <MenuItem value={'Android Abuse'}>Android Abuse</MenuItem>
                                        <MenuItem value={'Cookie Theft'}>Cookie Theft</MenuItem>
                                        <MenuItem value={"Cookie theft"}>Cookie theft</MenuItem>
                                        <MenuItem value={"Bad SDKs"}>Bad SDKs</MenuItem>
                                        <MenuItem value={"Accounts"}>Accounts</MenuItem>
                                        <MenuItem value={"Dumps"}>Dumps</MenuItem>
                                        <MenuItem value={"Cloud Abuse"}>Cloud Abuse</MenuItem>
                                        <MenuItem value={"Crypto Wallets"}>Crypto Wallets</MenuItem>
                                        <MenuItem value={"Social Engineering"}>Social Engineering</MenuItem>
                                        <MenuItem value={"Harassment"}>Harrassment</MenuItem>
                                        <MenuItem value={"Malicious Attachment"}>Malicious Attachment</MenuItem>
                                        <MenuItem value={"Zero-Day"}>Zero-Day</MenuItem>
                                        <MenuItem value={"Vulnerabilities"}>Vulnerabilities</MenuItem>
                                        <MenuItem value={"Phishing"}>Phishing</MenuItem>
                                        <MenuItem value={"Infected Sites"}>Infected Sites</MenuItem>
                                        <MenuItem value={"YouTube"}>YouTube</MenuItem>
                                        <MenuItem value={"Stealers"}>Stealers</MenuItem>
                                        <MenuItem value={'Ransomware'}>Ransomware</MenuItem>
                                        <MenuItem value={"DDOS"}>DDOS</MenuItem>
                                        <MenuItem value={"IoT Abuse"}>IoT Abuse</MenuItem>
                                        <MenuItem value={"Misinformation"}>Misinformation</MenuItem>
                                        <MenuItem value={"High Profile"}>High Profile</MenuItem>
                                        <MenuItem value={"2FA Bypass"}>2FA Bypass</MenuItem>
                                        <MenuItem value={"Ad Spam"}>Ad Spam</MenuItem>
                                        <MenuItem value={"Ad Fraud"}>Ad Fraud</MenuItem>
                                        <MenuItem value={"gMail Bypass"}>gMail Bypass</MenuItem>
                                        <MenuItem value={"APT"}>APT</MenuItem>
                                        <MenuItem value={"Chrome"}>Chrome</MenuItem>
                                        <MenuItem value={"Silent Extensions"}>Silent Extensions</MenuItem>
                                        <MenuItem value={"BH SEO"}>BH SEO</MenuItem>
                                        <MenuItem value={"Token Theft"}>Token Theft</MenuItem>
                                        <MenuItem value={"Cloaking"}>Cloaking</MenuItem>
                                        <MenuItem value={"GPay Payment Abuse"}>GPay Payment Abuse</MenuItem>
                                        <MenuItem value={"API Abuse"}>API Abuse</MenuItem>
                                        <MenuItem value={"Law Enforcement"}>Law Enforcement</MenuItem>
                                        <MenuItem value={"Violent Extremism"}>Violent Extremism</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="uat-simple-select-label">UAT</InputLabel>
                                    <Select
                                        labelId="uat-simple-select-label"
                                        id="uat-simple-select"
                                        value={uat}
                                        label="UAT"
                                        onChange={handleUatChange}
                                    >
                                        <MenuItem value={"Child Exploitation & Abuse"}>Child Exploitation & Abuse</MenuItem>
                                        <MenuItem value={"Terrorism & Violent Extremism"}>Terrorism & Violent Extremism</MenuItem>
                                        <MenuItem value={"Dangerous & Illegal Activity"}>Dangerous & Illegal Activity</MenuItem>
                                        <MenuItem value={"Hate"}>Hate</MenuItem>
                                        <MenuItem value={"Harassment"}>Harassment</MenuItem>
                                        <MenuItem value={"Regulated Goods & Services"}>Regulated Goods & Services</MenuItem>
                                        <MenuItem value={"Misinformation/Disinformation"}>Misinformation/Disinformation</MenuItem>
                                        <MenuItem value={"Impersonation"}>Impersonation</MenuItem>
                                        <MenuItem value={"Privacy"}>Privacy</MenuItem>
                                        <MenuItem value={"Legal"}>Legal</MenuItem>
                                        <MenuItem value={"Graphic & Sensitive Content"}>Graphic & Sensitive Content</MenuItem>
                                        <MenuItem value={"Editorial and Technical Standards"}>Editorial and Technical Standards</MenuItem>
                                        <MenuItem value={"Fairness & Quality"}>Fairness & Quality</MenuItem>
                                        <MenuItem value={"Falsification"}>Falsification</MenuItem>
                                        <MenuItem value={"Unauthorized & Malicious Access"}>Unauthorized & Malicious Access</MenuItem>
                                        <MenuItem value={"Spam"}>Spam</MenuItem>
                                        <MenuItem value={"Fraud & Monetization of Abuse"}>Fraud & Monetization of Abuse</MenuItem>
                                        <MenuItem value={"Malicious & Unwanted Software"}>Malicious & Unwanted Software</MenuItem>
                                        <MenuItem value={"Systems Abuse & Unauthorized Use"}>Systems Abuse & Unauthorized Use</MenuItem>
                                        <MenuItem value={"Other Abuse"}>Other Abuse</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="ttp-simple-select-label">TRA</InputLabel>
                                    <Select
                                        labelId="ttp-simple-select-label"
                                        id="ttp-simple-select"
                                        value={tra}
                                        label="TRA"
                                        onChange={handleTraChange}
                                    >
                                        <MenuItem value={"Geopolitical dynamics"}>Geopolitical dynamics</MenuItem>
                                        <MenuItem value={"Social unrest"}>Social unrest</MenuItem>
                                        <MenuItem value={"Health"}>Health</MenuItem>
                                        <MenuItem value={"Major civic events"}>Major civic events</MenuItem>
                                        <MenuItem value={"Global perceptions of bias"}>Global perceptions of bias</MenuItem>
                                        <MenuItem value={"Vulnerable or marginalized groups"}>Vulnerable or marginalized groups</MenuItem>
                                        <MenuItem value={"Dangerous orgs"}>Dangerous orgs</MenuItem>
                                        <MenuItem value={"Harmful misinformation"}>Harmful misinformation</MenuItem>
                                        <MenuItem value={"Misuse of user data"}>Misuse of user data</MenuItem>
                                        <MenuItem value={"Miscellaneous"}>Miscellaneous</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        
                    </Grid>

                    <TextField className="log-add-box-comment" label="Comments"
                               onChange={(event) => {setComment(event.target.value)}}/>
                    <Button className="log-add-button" variant="contained" endIcon={<SendIcon />} onClick={sendNewObject}>Send</Button>
                </div>
            </div>
        </>
    )
}

export default LogAdd;