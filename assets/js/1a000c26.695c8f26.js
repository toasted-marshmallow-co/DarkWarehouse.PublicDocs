"use strict";(self.webpackChunkdark_warehouse_public_docs=self.webpackChunkdark_warehouse_public_docs||[]).push([[6262],{46637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(85893),i=t(11151);const o={sidebar_position:1},a="Diagnosing Communications",r={id:"Advanced-Topics/Machine-Communication/Diagnosing Communication",title:"Diagnosing Communications",description:"This page provides an overview of how the DarkWarehouse communicates with machines via the Whisker and how to diagnose and test the connection between the DarkWarehouse and Whisker.",source:"@site/docs/05-Advanced-Topics/01-Machine-Communication/Diagnosing Communication.md",sourceDirName:"05-Advanced-Topics/01-Machine-Communication",slug:"/Advanced-Topics/Machine-Communication/Diagnosing Communication",permalink:"/docs/Advanced-Topics/Machine-Communication/Diagnosing Communication",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/docs/Basic-Functionality/My-Account/create-a-page"},next:{title:"Create a Page",permalink:"/docs/Advanced-Topics/System-Settings/create-a-page"}},h={},c=[{value:"Communication Protocol \ud83d\udce1",id:"communication-protocol-",level:2},{value:"Testing Communication \ud83d\udee0\ufe0f",id:"testing-communication-\ufe0f",level:2},{value:"Test 1: HTTP/HTTPS Connection Test (Whisker \u2194\ufe0f DarkWarehouse)",id:"test-1-httphttps-connection-test-whisker-\ufe0f-darkwarehouse",level:3},{value:"Whisker to DarkWarehouse Test",id:"whisker-to-darkwarehouse-test",level:4},{value:"DarkWarehouse to Whisker Test",id:"darkwarehouse-to-whisker-test",level:4},{value:"Test 2: Manual Whisker Test (Whisker \u2194\ufe0f Machine)",id:"test-2-manual-whisker-test-whisker-\ufe0f-machine",level:3},{value:"Test 3: Machine Location Update Test \u267b\ufe0f (DarkWarehouse \u2194\ufe0f Whisker \u2194\ufe0f Machine)",id:"test-3-machine-location-update-test-\ufe0f-darkwarehouse-\ufe0f-whisker-\ufe0f-machine",level:3},{value:"Steps to Perform the Test:",id:"steps-to-perform-the-test",level:4},{value:"Troubleshooting \ud83d\udee0\ufe0f",id:"troubleshooting-\ufe0f",level:4}];function l(e){const n={br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"diagnosing-communications",children:"Diagnosing Communications"}),"\n",(0,s.jsx)(n.p,{children:"This page provides an overview of how the DarkWarehouse communicates with machines via the Whisker and how to diagnose and test the connection between the DarkWarehouse and Whisker."}),"\n",(0,s.jsx)(n.h2,{id:"communication-protocol-",children:"Communication Protocol \ud83d\udce1"}),"\n",(0,s.jsx)(n.p,{children:'The DarkWarehouse communicates with machines via a protocol called Variable-Length Protocol (VLP). VLP is a structured message that machines and the DarkWarehouse can both understand. The DarkWarehouse will generate a VLP message and these messages are sent to machines in the form of data bytes. The conversion from a structured message to data bytes is done via a message-translator called the "Whisker".'}),"\n",(0,s.jsx)(n.p,{children:"The DarkWarehouse and Whisker communication is done via a communication protocol called HTTP/HTTPS. HTTP/HTTPS is a protocol used for exchanging information over the internet. \ud83c\udf10"}),"\n",(0,s.jsx)(n.p,{children:"Below is a diagram depicting the three components of the AS/RS and how they interact."}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant DarkWarehouse\n    participant Whisker\n    participant Machine\n\nDarkWarehouse->>Whisker: Auto Instruction\nNote right of DarkWarehouse: HTTP/HTTPS\n\nloop Send instruction\nWhisker->>Machine: Auto instruction\nNote right of Whisker: VLP\nend\n\nMachine--\x3e>Whisker: Acknowledge\nNote left of Machine: VLP\n\nloop Perform Auto Task\nMachine->>Machine: Perform Task\nend\n\nloop Send response\nMachine->>Whisker: Task Complete\nNote left of Machine: VLP\nend\nWhisker--\x3e>Machine: Acknowledge\nNote right of Whisker: VLP\n\nloop Send data\nWhisker->>DarkWarehouse: Auto instruction complete\nNote right of DarkWarehouse: HTTP/HTTPS\nend"}),"\n",(0,s.jsx)(n.h2,{id:"testing-communication-\ufe0f",children:"Testing Communication \ud83d\udee0\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"There are a few tests that can be done to test if the communication between the three main components is set up successfully."}),"\n",(0,s.jsx)(n.h3,{id:"test-1-httphttps-connection-test-whisker-\ufe0f-darkwarehouse",children:"Test 1: HTTP/HTTPS Connection Test (Whisker \u2194\ufe0f DarkWarehouse)"}),"\n",(0,s.jsx)(n.h4,{id:"whisker-to-darkwarehouse-test",children:"Whisker to DarkWarehouse Test"}),"\n",(0,s.jsx)(n.p,{children:'On the Whisker, under Settings>Service Communication, you will be able to test the connection between the Whisker and the DarkWarehouse. This can be done by verifying that the "URL for the DarkWarehouse API" is correct and then pressing "Check Connection".'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to Service Communication \ud83d\udef0\ufe0f\n",(0,s.jsx)(n.img,{alt:"Whisker Home - Settings",src:t(75347).Z+"",width:"3348",height:"1627"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Verify URL and Check Connection \ud83d\udd17\n",(0,s.jsx)(n.img,{alt:"Whisker Service Communication Check",src:t(56508).Z+"",width:"3333",height:"1613"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Evaluate Response \ud83d\udcca"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Successful Connection \u2705 ",(0,s.jsx)(n.br,{}),"\n",'If the connection is successful, you will see a message at the bottom of the screen that says "Connected to.." some information about the current DarkWarehouse connection.\n',(0,s.jsx)(n.img,{alt:"DarkWarehouse Connection Test - Success",src:t(83482).Z+"",width:"3333",height:"1615"})]}),"\n",(0,s.jsxs)(n.li,{children:["Unsuccessful Connection \u274c ",(0,s.jsx)(n.br,{}),"\n","If the connection fails, an error message will pop-up explaining what went wrong. Please contact a Toasted Marshmallow employee if you do not understand the error.\n",(0,s.jsx)(n.img,{alt:"DarkWarehouse Connection Test - Error",src:t(67100).Z+"",width:"1212",height:"590"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"darkwarehouse-to-whisker-test",children:"DarkWarehouse to Whisker Test"}),"\n",(0,s.jsx)(n.p,{children:"A similar test can be done to ensure the DarkWarehouse is connected to the Whisker correct."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to DarkWarehouse API Definition \ud83c\udf10 ",(0,s.jsx)(n.br,{}),"\n",'This can be found at the mai URL of the application. Right down at the bottom, you will find an API route called "dev/whisker-diagnostics > /api/v1/dev/whisker-diagnostics/connection". Locate this and press "Try it out"\n',(0,s.jsx)(n.img,{alt:"DarkWarehouse Whisker Connection Check - Try it out",src:t(68263).Z+"",width:"3314",height:"1619"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the Route \u25b6\ufe0f ",(0,s.jsx)(n.br,{}),"\n",'Press "Execute" to run the connection test.\n',(0,s.jsx)(n.img,{alt:"DarkWarehouse Whisker Connection Check - Execute",src:t(52992).Z+"",width:"3285",height:"1615"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Evaluate Response"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"If successful, you will received a 200 response with the connection values."}),"\n",(0,s.jsx)(n.li,{children:"If unsuccessful, you will receive a 500 response with n associated error message."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-2-manual-whisker-test-whisker-\ufe0f-machine",children:"Test 2: Manual Whisker Test (Whisker \u2194\ufe0f Machine)"}),"\n",(0,s.jsx)(n.p,{children:'You are able to bypass the use of the DarkWarehouse and send auto instructions to machine through the Whisker. This can be done by navigating to the "Manual Control" page and setting up the control to send the required instruction to the machine. The instruction and response can be evaluated to determine if Whisker to machine communication is setup correctly. To perform this test, follow the steps below:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to Manual Control \ud83d\udd79\ufe0f\n",(0,s.jsx)(n.img,{alt:"Whisker Home - Manual Control",src:t(41273).Z+"",width:"3349",height:"1597"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Select the Correct Machine and Inquiry Type \ud83e\udd16\nSelect the machine you would like to send an instruction to and then select "Request Live Status" as the Inquiry Type. Once that is done, press "Send Message"\n',(0,s.jsx)(n.img,{alt:"Manual Control - Send Live Status",src:t(54754).Z+"",width:"3349",height:"1623"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Evaluate Response via Live Telemetry \ud83d\udcca"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the Live Telemetry page where all communication in and out of the Whisker can be viewed.\n",(0,s.jsx)(n.img,{alt:"Whisker Home - Live Telemetry",src:t(86506).Z+"",width:"3314",height:"1615"})]}),"\n",(0,s.jsxs)(n.li,{children:["Look through the live telemetry logs and find the live status that was just sent to the request VLP address. If everything was successful, you should see an Inquiry then Status from the machine followed by an Acknowledge from the Whisker. If those messages are not all present, a breakdown in communication has occurred and the relevant team should be notified.\n",(0,s.jsx)(n.img,{alt:"Whisker Live Telemetry - Live Status",src:t(98475).Z+"",width:"3314",height:"1625"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-3-machine-location-update-test-\ufe0f-darkwarehouse-\ufe0f-whisker-\ufe0f-machine",children:"Test 3: Machine Location Update Test \u267b\ufe0f (DarkWarehouse \u2194\ufe0f Whisker \u2194\ufe0f Machine)"}),"\n",(0,s.jsx)(n.p,{children:"A comprehensive test to assess the communication between the DarkWarehouse, Whisker, and Machine is the Machine Location Update Test. This involves updating an OmniMole's position in the DarkWarehouse system to a random location and observing the response and subsequent location correction from the machine."}),"\n",(0,s.jsx)(n.h4,{id:"steps-to-perform-the-test",children:"Steps to Perform the Test:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update Machine Location on DarkWarehouse UI \ud83d\udccd ",(0,s.jsx)(n.br,{}),"\n","Log in to the DarkWarehouse interface and manually alter the OmniMole's location to a random point within the system. This action simulates a discrepancy in the system's data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send Live Status Request to Machine \ud83d\udce1 ",(0,s.jsx)(n.br,{}),"\n","Trigger a live status request from the DarkWarehouse to the OmniMole. This will prompt the machine to report its actual physical location."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Monitor Whisker Telemetry for Transmission Details \ud83d\udcca ",(0,s.jsx)(n.br,{}),"\n","Check the Whisker's telemetry logs to confirm that the live status request was sent correctly, using the appropriate VLP address.\n",(0,s.jsx)(n.img,{alt:"Whisker Live Telemetry - Live Status",src:t(98475).Z+"",width:"3314",height:"1625"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Verify Machine Response \ud83e\udd16 ",(0,s.jsx)(n.br,{}),"\n","Ensure the machine's reply with its actual location is received. The correct response should lead to an automatic update of its position on the DarkWarehouse UI."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"troubleshooting-\ufe0f",children:"Troubleshooting \ud83d\udee0\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"In case of a failure in communication or an incorrect response:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify that the Whisker's telemetry indicates a sent live status."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check if the machine's response is received and accurately reflects its physical location."}),"\n",(0,s.jsx)(n.li,{children:"If discrepancies persist, delve into deeper diagnostics such as inspecting the VLP address used, listener's byte analysis, or consultation with technical support."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Confirm UI Update \ud83d\udda5\ufe0f ",(0,s.jsx)(n.br,{}),"\n","Observe the DarkWarehouse UI for the updated location of the OmniMole, ensuring it matches the machine's reported actual position."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,s.jsx)(n.strong,{children:"WARNING"})," \u26a0\ufe0f",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Be cautious when updating the OmniMole's location on the UI. If other machines are moving in the system, the DarkWarehouse may route a different OmniMole into your OmniMole's position in real life and cause a collision. We'd recommend performing this test when the entire system is not running or at least that level."})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},52992:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/darkwarehouse-whisker-diagnostics-route-execute-2bd5d15da7e2c9ca98ae1ec24979898a.png"},68263:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/darkwarehouse-whisker-diagnostics-route-try-ceeb56d6db56e3866bd212c7a8052461.png"},67100:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-settings-service-communication-error-raw-d7ff537c96ba2e7fd9a6221acdb4cbd2.png"},86506:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-home-page-live-telemetry-39631a976fffbaba0a48c1dd72fd5ca8.png"},41273:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-home-page-machine-control-ee31011d8d5db2fba057af2d4f93afe0.png"},75347:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-home-page-settings-ca38fd2e2cdda5c31cbb809b37c2809d.png"},98475:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-live-telemetry-b74b975b0d4693f05c67fc224b05be0e.png"},54754:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-machine-control-live-status-3b8db8602de38d903dcfccca18374062.png"},83482:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-settings-service-communication-success-f25b4ff46b87b6be6c16a55a7082c2f1.png"},56508:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/whisker-settings-service-communication-4fab2f2532f63642fbd187112792492f.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);