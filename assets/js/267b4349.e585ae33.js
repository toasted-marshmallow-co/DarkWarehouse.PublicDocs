"use strict";(self.webpackChunkdark_warehouse_public_docs=self.webpackChunkdark_warehouse_public_docs||[]).push([[7198],{84016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var s=t(85893),i=t(11151);const l={sidebar_position:3},a="TMS Task Types",o={id:"Traffic Management/TMS Task Types",title:"TMS Task Types",description:"This page provides an overview of TMS Task Types. A TMS Task is used to define an action for the TMS to perform such as a machine or pallet being moved to a different location. This document will discuss the different task types.",source:"@site/docs/08-Traffic Management/TMS Task Types.md",sourceDirName:"08-Traffic Management",slug:"/Traffic Management/TMS Task Types",permalink:"/docs/Traffic Management/TMS Task Types",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Turn Based Game",permalink:"/docs/Traffic Management/Turn Based Game"},next:{title:"Machine Online/Offline Settings",permalink:"/docs/Traffic Management/Machine Online-Offline Settings"}},c={},r=[{value:"No Movement Tasks\u2699\ufe0f",id:"no-movement-tasks\ufe0f",level:2},{value:"Live Status Task\ud83d\udd0d",id:"live-status-task",level:3},{value:"Common Uses",id:"common-uses",level:4},{value:"Requirements",id:"requirements",level:4},{value:"Mode Change Task\ud83d\udea6",id:"mode-change-task",level:3},{value:"Common Uses",id:"common-uses-1",level:4},{value:"Requirements",id:"requirements-1",level:4},{value:"Emergency Stop Task\u26d4",id:"emergency-stop-task",level:3},{value:"Common Uses",id:"common-uses-2",level:4},{value:"Requirements",id:"requirements-2",level:4},{value:"Error Reset Task\ud83e\uddf9",id:"error-reset-task",level:3},{value:"Common Uses",id:"common-uses-3",level:4},{value:"Requirements",id:"requirements-3",level:4},{value:"How to Create",id:"how-to-create",level:3},{value:"Generic Tasks\ud83d\udee3\ufe0f",id:"generic-tasks\ufe0f",level:2},{value:"Go To Better Location Task\ud83d\udeec",id:"go-to-better-location-task",level:3},{value:"Common Uses",id:"common-uses-4",level:4},{value:"Requirements",id:"requirements-4",level:4},{value:"Go To Nearest Available Location\ud83d\udeeb",id:"go-to-nearest-available-location",level:3},{value:"Common Uses",id:"common-uses-5",level:4},{value:"Requirements",id:"requirements-5",level:4},{value:"Go To Charger\u26a1",id:"go-to-charger",level:3},{value:"Common Uses",id:"common-uses-6",level:4},{value:"Requirements",id:"requirements-6",level:4},{value:"How to Create",id:"how-to-create-1",level:3},{value:"Pallet Task\ud83d\ude9a",id:"pallet-task",level:2},{value:"Inbound Task\ud83d\ude9a\u2b07\ufe0f",id:"inbound-task\ufe0f",level:3},{value:"Common Uses",id:"common-uses-7",level:4},{value:"Requirements",id:"requirements-7",level:4},{value:"Inbound Reject Task\ud83d\ude9a\u26d4\u2b06\ufe0f",id:"inbound-reject-task\ufe0f",level:3},{value:"Common Uses",id:"common-uses-8",level:4},{value:"Requirements",id:"requirements-8",level:4},{value:"Internal Single Pallet Movement Task\ud83d\ude9a\ud83d\udd01",id:"internal-single-pallet-movement-task",level:3},{value:"Common Uses",id:"common-uses-9",level:4},{value:"Requirements",id:"requirements-9",level:4},{value:"Outbound Task\ud83d\ude9a\u2b06\ufe0f",id:"outbound-task\ufe0f",level:3},{value:"Common Uses",id:"common-uses-10",level:4},{value:"Requirements",id:"requirements-10",level:4},{value:"How to Create",id:"how-to-create-2",level:3},{value:"Multi-Pallet Task",id:"multi-pallet-task",level:2},{value:"Stock Count Task\ud83d\udcdd",id:"stock-count-task",level:3},{value:"Common Uses",id:"common-uses-11",level:4},{value:"Requirements",id:"requirements-11",level:4},{value:"Shuffle Task\ud83d\udd01",id:"shuffle-task",level:3},{value:"Common Uses",id:"common-uses-12",level:4},{value:"Requirements",id:"requirements-12",level:4},{value:"Automatic Retrieve Task\u2b06\ufe0f",id:"automatic-retrieve-task\ufe0f",level:3},{value:"Common Uses",id:"common-uses-13",level:4},{value:"Requirements",id:"requirements-13",level:4},{value:"Automatic Deposit Task\u2b07\ufe0f",id:"automatic-deposit-task\ufe0f",level:3},{value:"Common Uses",id:"common-uses-14",level:4},{value:"Requirements",id:"requirements-14",level:4},{value:"How to Create",id:"how-to-create-3",level:3},{value:"Potential Machines For Tasks",id:"potential-machines-for-tasks",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tms-task-types",children:"TMS Task Types"}),"\n",(0,s.jsx)(n.p,{children:"This page provides an overview of TMS Task Types. A TMS Task is used to define an action for the TMS to perform such as a machine or pallet being moved to a different location. This document will discuss the different task types."}),"\n",(0,s.jsx)(n.h2,{id:"no-movement-tasks\ufe0f",children:"No Movement Tasks\u2699\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"No Movement Tasks do not involve any machine movement but instead get or update the state of a machine."}),"\n",(0,s.jsx)(n.h3,{id:"live-status-task",children:"Live Status Task\ud83d\udd0d"}),"\n",(0,s.jsx)(n.p,{children:"A Live Status Task is used to get the current state of a machine such as it's location, mode and error state."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To update the location of a machine that has been manually moved."}),"\n",(0,s.jsx)(n.li,{children:"To get data on a machine in error"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on but does not need to be online in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"mode-change-task",children:"Mode Change Task\ud83d\udea6"}),"\n",(0,s.jsx)(n.p,{children:"A Mode Change Task is used to update the mode of a machine to setup, manual or auto."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-1",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To update the machines state to auto after manual movement."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-1",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on but does not need to be online in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"emergency-stop-task",children:"Emergency Stop Task\u26d4"}),"\n",(0,s.jsx)(n.p,{children:"An Emergency Stop Task is used to enable the emergenecy stop on a machine. This will cause it to stop any current movement."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-2",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the case of an accident the machine should be emergency stopped."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-2",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on but does not need to be online in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"error-reset-task",children:"Error Reset Task\ud83e\uddf9"}),"\n",(0,s.jsx)(n.p,{children:"An Error Reset Task is used to reset any error on the machine."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-3",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the machine has a non-hardware related error."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-3",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on but does not need to be online in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-create",children:"How to Create"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(24034).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Manage Traffic -> TMS Tasks -> Machine Inquiry\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(70968).Z+"",width:"1597",height:"736"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively right click a machine -> Create Machine Task -> Inquiry Task\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(69570).Z+"",width:"1597",height:"735"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a machine. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(56190).Z+"",width:"1918",height:"876"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task type. Click create.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(40610).Z+"",width:"1920",height:"873"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To quickly create a Live Status Task, Right click a machine -> Request a Status Update\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(19960).Z+"",width:"1597",height:"737"})]}),"\n",(0,s.jsx)(n.h2,{id:"generic-tasks\ufe0f",children:"Generic Tasks\ud83d\udee3\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"Generic Tasks are used to move a machine to a new location."}),"\n",(0,s.jsx)(n.h3,{id:"go-to-better-location-task",children:"Go To Better Location Task\ud83d\udeec"}),"\n",(0,s.jsx)(n.p,{children:"A Go To Better Location Task moves a machine to the users specified location."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-4",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To move a machine into a zone or level it will be working in."}),"\n",(0,s.jsx)(n.li,{children:"To move a machine for maintenance."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-4",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on, online and in auto in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The specified destination needs to be inside the machines zones and a route needs to exist to the location."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"go-to-nearest-available-location",children:"Go To Nearest Available Location\ud83d\udeeb"}),"\n",(0,s.jsx)(n.p,{children:"A Go To Nearest Available Location Task moves an Omni-Mole to the nearest location that is not currently occupied by a machine or in the way of any tasks."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-5",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If an Omni-Mole needs to move away from it's current location but the destination does not matter."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-5",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be switched on, online and in auto in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"go-to-charger",children:"Go To Charger\u26a1"}),"\n",(0,s.jsx)(n.p,{children:"A Go To Charger Task will send an Omni-Mole to the nearest available charger."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-6",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To send an Omni-Mole to charge when low on battery."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-6",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The machine needs to be switched on, online and in auto in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"At least one charger needs to be switched on, online, in auto and available in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-create-1",children:"How to Create"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(24034).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Manage Traffic -> TMS Tasks -> Machine Movement\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(6847).Z+"",width:"1597",height:"736"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively right click a machine -> Create Machine Task -> Generic Movement Task (Or a specific task type)\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(46869).Z+"",width:"1597",height:"735"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a machine. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(562).Z+"",width:"1600",height:"735"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optionally select a destination (Only necessary for Go To Better Location Task). Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(84387).Z+"",width:"1598",height:"737"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task type. Click create.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(43421).Z+"",width:"1598",height:"736"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pallet-task",children:"Pallet Task\ud83d\ude9a"}),"\n",(0,s.jsx)(n.p,{children:"Pallet Tasks are used to move a pallet to another location"}),"\n",(0,s.jsx)(n.h3,{id:"inbound-task\ufe0f",children:"Inbound Task\ud83d\ude9a\u2b07\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"An Inbound Task is created on scan in of a pallet and will take the pallet into the store."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-7",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To send a pallet into the store that has not automatically been sent in."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-7",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The source and destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the pallet."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If the pallet is on a conveyor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The conveyor needs to be switched on, online and in auto in the TMS system."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inbound-reject-task\ufe0f",children:"Inbound Reject Task\ud83d\ude9a\u26d4\u2b06\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"An Inbound Reject Task is created on scan in of an invalid pallet and will move the pallet to a reject bay."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-8",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To send an invalid pallet to a reject bay that has not automatically been sent."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-8",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"If the pallet is on a conveyor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The conveyor needs to be switched on, online and in auto in the TMS system.\nIf the pallet is not on a conveyor:"}),"\n",(0,s.jsx)(n.li,{children:"The source and destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the pallet."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"internal-single-pallet-movement-task",children:"Internal Single Pallet Movement Task\ud83d\ude9a\ud83d\udd01"}),"\n",(0,s.jsx)(n.p,{children:"An Internal Single Pallet Movement Task is created to move the pallet within the store."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-9",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To move a pallet out of lane so that another pallet can be accessed."}),"\n",(0,s.jsx)(n.li,{children:"To move a pallet to a better storage location"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-9",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The source and destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the pallet."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"outbound-task\ufe0f",children:"Outbound Task\ud83d\ude9a\u2b06\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"An Outbound Task is created to move the out of the store."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-10",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To move a pallet out of the store that has not automatically been sent out."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-10",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The source and destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the pallet."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-create-2",children:"How to Create"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(24034).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Manage Traffic -> TMS Tasks -> Pallet Movement\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(6223).Z+"",width:"1597",height:"736"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively right click a pallet -> Create Pallet Movement -> Pallet Movement\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(77529).Z+"",width:"1600",height:"736"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a pallet. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(90704).Z+"",width:"1600",height:"737"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a destination. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(40420).Z+"",width:"1597",height:"733"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task type. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(48658).Z+"",width:"1598",height:"737"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task priority (In most cases use low. Medium and high are for more urgent tasks). Click create.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(58455).Z+"",width:"1597",height:"735"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"multi-pallet-task",children:"Multi-Pallet Task"}),"\n",(0,s.jsx)(n.p,{children:"Multi-Pallet Tasks are used to perform an action on multiple pallets in a lane."}),"\n",(0,s.jsx)(n.h3,{id:"stock-count-task",children:"Stock Count Task\ud83d\udcdd"}),"\n",(0,s.jsx)(n.p,{children:"A Stock Count Task counts the number of pallets in a lane."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-11",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To validate if a lane has the number of pallets recorded in the TMS."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-11",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"shuffle-task",children:"Shuffle Task\ud83d\udd01"}),"\n",(0,s.jsx)(n.p,{children:"A Shuffle Tasks moves a defined number of pallets forwards or backwards in a lane."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-12",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To clean up a lane by moving all pallets to one side."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-12",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"automatic-retrieve-task\ufe0f",children:"Automatic Retrieve Task\u2b06\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"An Automatic Retrieve Task is used to shuffle a defined number of pallets towards an outbound location as they are being take out of the store."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-13",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To move pallets to an outbound position while a forklift is removing the pallets and scanning them out."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-13",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"automatic-deposit-task\ufe0f",children:"Automatic Deposit Task\u2b07\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"An Automatic Retrieve Task is used to shuffle a defined number of pallets away from an inbound location as they are being put into the store."}),"\n",(0,s.jsx)(n.h4,{id:"common-uses-14",children:"Common Uses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To move pallets from an inbound position while a forklift is placing the pallets and scanning them in."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"requirements-14",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The destination locations need to be unlocked."}),"\n",(0,s.jsx)(n.li,{children:"At least one Omni-Mole needs to be switched on, online, in auto and available in the TMS system."}),"\n",(0,s.jsx)(n.li,{children:"The Omni-Mole needs to be able to access the destination."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-create-3",children:"How to Create"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(24034).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Manage Traffic -> TMS Tasks -> Multi-Pallet Movement\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(98886).Z+"",width:"1597",height:"736"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively right click a pallet -> Create Multi-Pallet Task -> Multi-Pallet Movement\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(68896).Z+"",width:"1600",height:"735"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task type. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(53338).Z+"",width:"1597",height:"733"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a destination. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(83346).Z+"",width:"1598",height:"733"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a task priority (In most cases use low. Medium and high are for more urgent tasks). Click create.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:t(57627).Z+"",width:"1598",height:"732"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"potential-machines-for-tasks",children:"Potential Machines For Tasks"}),"\n",(0,s.jsx)(n.p,{children:"Below are the machine that can potentially be used for each task type"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Task Types"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Omni-Mole"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"VTU"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Conveyor"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Charger"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Live Status Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Mode Change Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Emergency Stop Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Error Reset Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Go To Better Location Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Go To Nearest Available Location"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Go To Charger"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Inbound Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Inbound Reject Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Internal Single Pallet Movement Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Outbound Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Stock Count Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Shuffle Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Automatic Retrieve Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Automatic Deposit Task"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},46869:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-generic-task-000-1-65f99cbc6d2ec8cd45edcc510be4d05b.png"},6847:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-generic-task-000-b75e30fb36e190efd24305d4c946cbad.png"},562:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-generic-task-001-7f7177baa1f58b15a6988f7430df6a91.png"},84387:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-generic-task-002-997e580458c8f02536aa4c38c141d042.png"},43421:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-generic-task-003-2dfb8fcd149f0bf26578083b8d097b11.png"},68896:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-multipallet-task-000-1-076fdada9e19b699dc731d0aee4b0f4c.png"},98886:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-multipallet-task-000-19bba4e9e22490accf2a2ff9fdfe8ccb.png"},53338:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-multipallet-task-001-0c6d83e272de93e54f552c3514b90b82.png"},83346:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-multipallet-task-002-c7d53828b4ceb14df161f5b0deba5f50.png"},57627:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-multipallet-task-003-5283051f59ea4f7151654e333f549545.png"},69570:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-no-movement-task-000-1-f3a4f89bbd196aee7f151b97d9fa5d2d.png"},19960:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-no-movement-task-000-2-855644cb2ddf1443fb0b7c653f595397.png"},70968:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-no-movement-task-000-1e9c00d054039e3fabc4d788ccd17795.png"},56190:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-no-movement-task-001-c1b900ce98518feb83a0f931f95ea6ec.png"},40610:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-no-movement-task-002-72b2070d7fbdc2695e631dcac64996e4.png"},77529:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-000-1-c0ade6df6159102800d303b24af79065.png"},6223:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-000-17f1cf351ea4db9701fdd35287f7597e.png"},90704:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-001-c20317ce0272f2b392901233637d75fb.png"},40420:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-002-eef28ea86ce75821bcefe17d9888bb86.png"},48658:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-003-47792f50cfbf399af809fc8ec2aad6b0.png"},58455:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-pallet-task-004-373dd614b9f0ba34b73ce8f5f3d7058e.png"},24034:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tms-tasks-create-task-001-ba2917c22a82c67e3eae526d4dbabc42.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);