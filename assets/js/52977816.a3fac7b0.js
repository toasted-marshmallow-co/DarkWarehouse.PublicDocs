"use strict";(self.webpackChunkdark_warehouse_public_docs=self.webpackChunkdark_warehouse_public_docs||[]).push([[1646],{2235:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>r,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=o(5893),i=o(1151);const t={sidebar_position:1},a="TMS Zones",l={id:"Basic-Functionality/Managing-the-System/TMS Zones",title:"TMS Zones",description:"This page provides an overview of TMS Zones. A TMS Zone is a collection of locations used to manage traffic in the system. We will explore the different types of zones and how to create/edit/delete them. Then we will cover the assigning of machine to these zones.",source:"@site/docs/04-Basic-Functionality/02-Managing-the-System/TMS Zones.md",sourceDirName:"04-Basic-Functionality/02-Managing-the-System",slug:"/Basic-Functionality/Managing-the-System/TMS Zones",permalink:"/docs/Basic-Functionality/Managing-the-System/TMS Zones",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Online-Offline Settings",permalink:"/docs/Basic-Functionality/Managing-the-System/Online-Offline Settings"},next:{title:"Create a Page",permalink:"/docs/Basic-Functionality/Dashboards/create-a-page"}},c={},d=[{value:"Zone Types",id:"zone-types",level:2},{value:"Travel Zone\ud83d\udee3\ufe0f",id:"travel-zone\ufe0f",level:3},{value:"Uses",id:"uses",level:4},{value:"Important Notes",id:"important-notes",level:4},{value:"Atomic Location Zone\ud83d\udea6",id:"atomic-location-zone",level:3},{value:"Uses",id:"uses-1",level:4},{value:"Important Notes",id:"important-notes-1",level:4},{value:"Creating a Zone\ud83c\udfd7\ufe0f",id:"creating-a-zone\ufe0f",level:2},{value:"Viewing a Zone\ud83d\udd0d",id:"viewing-a-zone",level:2},{value:"Editing a Zone\ud83d\udd27",id:"editing-a-zone",level:2},{value:"Deleting a Zone\ud83e\uddf9",id:"deleting-a-zone",level:2},{value:"Assigning/Unassigning a Machine to a Zone\ud83d\ude9a",id:"assigningunassigning-a-machine-to-a-zone",level:2}];function h(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tms-zones",children:"TMS Zones"}),"\n",(0,s.jsx)(n.p,{children:"This page provides an overview of TMS Zones. A TMS Zone is a collection of locations used to manage traffic in the system. We will explore the different types of zones and how to create/edit/delete them. Then we will cover the assigning of machine to these zones."}),"\n",(0,s.jsx)(n.h2,{id:"zone-types",children:"Zone Types"}),"\n",(0,s.jsx)(n.h3,{id:"travel-zone\ufe0f",children:"Travel Zone\ud83d\udee3\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"A Travel Zone defines the set of locations an Omni-Mole can move in but not leave. This is especially useful for resource management and managing the routes taken by Omni-Moles."}),"\n",(0,s.jsx)(n.h4,{id:"uses",children:"Uses"}),"\n",(0,s.jsx)(n.p,{children:"A Travel Zone can be used to dedicate some Omni-Moles to areas of the warehouse such as a specific level etc."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Below is an example of a Travel Zone being used to force Omni-Moles to remain on a single level.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(6400).Z+"",width:"1920",height:"876"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"important-notes",children:"Important Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Omni-Mole can be assigned to multiple Travel Zones and, as long as they overlap, can move from one zone to another."}),"\n",(0,s.jsx)(n.li,{children:"The Travel Zone can have multiple Omni-Moles assigned to it at the same time."}),"\n",(0,s.jsx)(n.li,{children:"If an Omni-Mole has not been assigned a Travel Zone, it will be able to move throughout the entire store."}),"\n",(0,s.jsx)(n.li,{children:"If the Omni-Mole has been assigned a Travel Zone but is currently outside it, the Omni-Mole will not be able to move."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"atomic-location-zone",children:"Atomic Location Zone\ud83d\udea6"}),"\n",(0,s.jsx)(n.p,{children:"An Atomic Location Zone defines a set of locations that can only have one Omni-Mole inside at a time. These are useful for managing the routes taken by Omni-Moles."}),"\n",(0,s.jsx)(n.h4,{id:"uses-1",children:"Uses"}),"\n",(0,s.jsx)(n.p,{children:"An Atomic Location Zone can be used to prevent unnecessary movements by Omni-Moles. This is done by placing an Atomic Location Zone at dead ends in the system since an Omni-Mole that has travelled into the dead end will have to come back."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Below is an example of an Atomic Location Zone being used near a dead end to prevent unnecessary movements.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(9926).Z+"",width:"1918",height:"875"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"important-notes-1",children:"Important Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Omni-Moles are not assigned to Atomic Location Zones, instead the zone applies to all Omni-Moles in the system."}),"\n",(0,s.jsx)(n.li,{children:"If an Omni-Mole is inside an Atomic Location Zone and another Omni-Mole needs to move into the zone, it will tell the Omni-Mole inside to relocate out of the zone if necessary."}),"\n",(0,s.jsx)(n.li,{children:"If two Omni-Moles are inside the Atomic Location Zone due to manual intervention or the zone being updated, both Omni-Moles are capable of moving within the Atomic Location Zone until one of them leaves."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-zone\ufe0f",children:"Creating a Zone\ud83c\udfd7\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"Creating a zone uses the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(2995).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Static Data -> Zone -> New Zone\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(1076).Z+"",width:"1916",height:"876"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the Location Grouping to Tms Zone. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(4343).Z+"",width:"1916",height:"875"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the zone type from the drop down. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(2927).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose a name and description for the zone. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(7137).Z+"",width:"1920",height:"881"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose the locations for the zone. This can be done using the Toggle Select cursor type by left clicking the locations or the Selection Box cursor type by holding shift and dragging the box over the locations. Click next.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(7302).Z+"",width:"1920",height:"876"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Finally enable the zone and click create.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(5451).Z+"",width:"1917",height:"872"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"viewing-a-zone",children:"Viewing a Zone\ud83d\udd0d"}),"\n",(0,s.jsxs)(n.p,{children:["To view a zone, right click, then go to View Zones -> Tms -> Travel (Or Atomic Location) and select the zone you want to view.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(2310).Z+"",width:"1919",height:"875"})]}),"\n",(0,s.jsx)(n.h2,{id:"editing-a-zone",children:"Editing a Zone\ud83d\udd27"}),"\n",(0,s.jsx)(n.p,{children:"Zones may need to be expanded or shrunk. Editing a zone uses the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure the Default cursor is selected\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(7674).Z+"",width:"1920",height:"877"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Right click a location and go to Assign to/Remove from TMS zone -> Travel (Or Atomic). Then select or deselect zones that the location should or should not be in.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(1585).Z+"",width:"1920",height:"874"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deleting-a-zone",children:"Deleting a Zone\ud83e\uddf9"}),"\n",(0,s.jsx)(n.p,{children:"Deleting a zone uses the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the TMS view, open the right side toolbar\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(9817).Z+"",width:"1920",height:"871"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Zones -> Delete Zone\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(9018).Z+"",width:"1920",height:"872"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use the drop down to select the zone. Click delete zone for instance.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(7877).Z+"",width:"1918",height:"872"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"assigningunassigning-a-machine-to-a-zone",children:"Assigning/Unassigning a Machine to a Zone\ud83d\ude9a"}),"\n",(0,s.jsx)(n.p,{children:"Once a Travel Zone has been created Omni-Moles can be assigned/unassigned. You may need to do this if an Omni-Mole is needed in another zone. This is done using the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Right click the machine to assign/unassign to the zone\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(5944).Z+"",width:"1920",height:"873"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to Assign to zone -> TMS. Then select or deselect zones that the machine should be assigned to.\n",(0,s.jsx)(n.img,{alt:"Toolbar Location",src:o(4415).Z+"",width:"1920",height:"876"})]}),"\n"]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5944:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-assign-machine-001-6b9c8a15cd90583f3b53466da2ffffc0.png"},4415:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-assign-machine-002-12ecdcbda172a68dd67b1476b189f0d2.png"},9926:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-atomic-location-zone-a944cde25c6c1ab36d58fa9a7d29340d.png"},2995:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-001-ba2917c22a82c67e3eae526d4dbabc42.png"},1076:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-002-71ffe724059011e3975381679c13528d.png"},4343:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-003-80dc2058a2ed153864392591f2c8f4f8.png"},2927:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-004-2b1b9b14b966aaa325bed04b435ee495.png"},7137:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-005-fe57ac319bfbc233a76c484512d91989.png"},7302:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-006-a647375f49af14857f4160011ba1d564.png"},5451:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-create-zone-007-af49b7463ed8d0667024b9bd8e9e2db8.png"},9817:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-delete-zone-001-cc1cb9ae5307935672c7cf2754079ad6.png"},9018:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-delete-zone-002-220692a87d6259f72cf3d11d2f189ff3.png"},7877:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-delete-zone-003-ba424ec757ec693eac4dbc2ffe9b5b00.png"},7674:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-edit-zone-001-47a10d9c608c0f160338577a85d2ec45.png"},1585:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-edit-zone-002-77e3585b5ff44a94fee9890b0d467db6.png"},6400:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-travel-zone-3939e36269772ec0bf0f725e3619a3d9.png"},2310:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/tms-zone-view-zone-a36b59b40fc4e5a9479b4e4aef29f460.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var s=o(7294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);