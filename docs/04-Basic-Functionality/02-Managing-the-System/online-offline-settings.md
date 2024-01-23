---
sidebar_position: 1
---

# Online/Offline Settings

This page provides an overview on the machine-related setting: Online/Offline toggle. This details what the settings mean and how to use them.

## Online/Offline Machine Functionality

The DarkWarehouse has the ability to turn any machine online or offline. If a machine is online, it means that is can be selected as a valid machine to perform some task within the system. If the machine is offline is means that it cannot be selected to perform any task.

On the UI, a machine is indicated as online or offline with a coloured lightning blot icon as depicted below.
\
![Online Indicator](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/online-indicator-raw.png)

*Online Machine*

![Offline Indicator](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/offline-indicator-raw.png)

*Offline Machine*

### Online Machines

When a machine is online, the DarkWarehouse sees that machine as available to perform some type of task. That machine will automatically be sent live statuses every few minutes to ensure that the system is always in sync with reality and if necessary, that machine will be chosen to do a task.

### Offline Machines

When a machine is offline, Live Statuses can still be sent to it by the user but no automatic tasks (including Live Statues) will be sent to that machine.

### OmniMoles

When an OmniMole is offline, no automatic instructions will be sent to it. The user can still update the location of the machine manually or send a live status to the machine but they will not be able to move the machine. The opposite is true for when an OmniMole is online, where the OmniMole will automatically be sent live statuses and be chosen to perform tasks.

When an OmniMole is online, it will be blue on the UI and has an online indicator. This can be seen below.
![Online OmniMole](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/OmniMoles/omnimole-online-raw.png)

Turning the OmniMole offline can be done by right-clicking the mole and pressing "Online".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/OmniMoles/omnimole-offline-toggle.png" width="286" height="378"></img>

When an OmniMole is offline, it will be red on the UI and has an offline indicator. This can be seen below.
![Offline OmniMole](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/OmniMoles/omniMole-offline-raw.png)

Turning the OmniMole online again can be done by right-clicking the mole and pressing "Offline".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/OmniMoles/omnimole-online-toggle.png" width="286" height="378"></img>

### VTUs

When a VTU is offline, no automatic instructions will be sent to it. The user can still update the location of the machine manually or send a live status to the machine but they will not be able to move the machine. The VTU will not be chosen as a valid route to change levels through. The opposite is true for when an OmniMole is online, where the OmniMole will automatically be sent live statuses and be chosen to perform tasks. The VTU will be available to be chosen as part of a route for a pallet or a mole to change levels.

When a VTU is online, it will have an online indicator. This can be seen below.\
![Online VTU](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/VTUs/vtu-online-raw.png)

Turning the VTU offline can be done by right-clicking the VTU and pressing "Online".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/VTUs/vtu-online-toggle.png" width="286" height="378"></img>

When a VTU is offline, it will have an offline indicator. This can be seen below.
![Offline VTU](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/VTUs/vtu-offline-raw.png)

Turning the VTU online again can be done by right-clicking the VTU and pressing "Offline".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/VTUs/vtu-offline-toggle.png" width="286" height="378"></img>

### Conveyors

When a Conveyor is offline, no automatic instructions will be sent to it. The user can still update the status of the machine by sending it a live status but they will not be able to move pallets with machine. When a Conveyor is online, it can be used to move pallets. Conveyors can be turned online and offline on a line or subsection level.

When a Conveyor is online, it will have no indicator. This can be seen below.\
![Online Conveyor](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Conveyors/conveyor-online-raw.png)

Turning the Conveyor offline can be done in two ways.\
1. Turning an individual subsection offline.
   - This is done by right-clicking the desired subsection and pressing "Set Offline (subsection: x)"
2. Turning a full Conveyor Line offline.
   - This is done by by right-clicking any subsection on the line and pressing "Set all conveyors offline".\
![Toggle Conveyors Offline](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Conveyors/conveyor-online-toggle-raw.png)

When a Conveyor is offline, it will be indicated by a red "OFF" indicator. This can be seen below.
![Offline Conveyor](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Conveyors/conveyor-offline-raw.png)

Turning the Conveyor online can be done in two ways.\
1. Turning an individual subsection online.
   - This is done by right-clicking the desired subsection and pressing "Set Online (subsection: x)"
2. Turning a full Conveyor Line online.
   - This is done by by right-clicking any subsection on the line and pressing "Set all conveyors online".\
![Toggle Conveyors Online](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Conveyors/conveyor-online-toggle-raw.png)

If a particular subsection is turned offline, the DarkWarehouse will not route a pallet beyond that subsection. For example, in the picture below, we can see that the full line is online except for one subsection. The DarkWarehouse will not route a pallet past that point, meaning all pallets will be routed to the first lane conveyor.
![Single Offline Conveyor Subsection](../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Conveyors/conveyor-subsection-offline-raw.png)

### Chargers and Charge Pads

When a Charger or Charge Pad is offline, no automatic instructions will be sent to it. The user can still update the status of the machine by sending a live status to the machine but they will not be able to use the machine to charge an OmniMole. If a Charger is offline, none of it's Charge Pads can be chosen to charge an OmniMole. If a Charge Pad is offline, it cannot be selected to charge an OmniMole. If a Charger is online, any of it's *online* Charge Pads can be chosen to charge and OmniMole.

#### Chargers

When a Charger is online, it will have no indicator. This can be seen below.\
![Online Charger](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charger-online-raw.png>)

Turning a Charger offline can be done by right-clicking the Charger and pressing "(Offline) Set Online".\
![Toggle Charger Offline](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charger-offline-toggle-raw.png>)

When a Charger is offline, it will be indicated by a red "OFF" indicator. This can be seen below.\
![Offline Charger](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charger-offline-raw.png>)

Turning the Charger online again can be done by right-clicking the Charger and pressing "(Online) Set Offline".\
![Toggle Charger Online](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charger-offline-toggle-raw.png>)

#### Charge Pads

When a Charge Pad is online, it will have an online indicator. This can be seen below.\
![Online Charger](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charge-pad-online-raw.png>)

Turning a Charge Pad offline can be done by right-clicking the Charge Pad and pressing "Offline".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/Charge Pads/charge-pad-offline-toggle.png" width="286" height="378"></img>

When a Charger is offline, it will have an offline indicator. This can be seen below.\
![Offline Charger](<../../../assets/Basic-Functionality/Managing-the-System/Online-Offline-Settings/Chargers and Charge Pads/charge-pad-offline-raw.png>)

Turning the Charge Pad online again can be done by right-clicking the Charger and pressing "Online".
<img src="/img/Basic-Functionality/Managing-the-System/Online-Offline-Setting/Charge Pads/charge-pad-online-toggle.png" width="286" height="378"></img>