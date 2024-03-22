---
sidebar_position: 3
---

# Interacting With Chargers 

Understanding chargers and charge pads is crucial for recharging the Omni-Moles battery🔌. Charge pads function as an electronic unit that resupply the Omni-Mole battery with energy, similar to an electronic vehicle being plugged in to charge. This guide illustrates various methods that can be used to interact with chargers and charge pads📓.

## Understanding Chargers & Charge Pads 💡

 Omni-Moles utilize reciprocating charge pads located beneath their chassis, resembling the process of plugging in a phone, they accurately and autonomously position themselves on the charge pads for charging🎯.Chargers can connect to many charge pads, while charge pads can only connect to one charger. 

### Chargers
Chargers operate in two ways: 
- **Standalone** 🤖- When a charger is in `standalone`, chargers operate independently with their own control cabinet🗄️.
- **Remotely controlled**📡 -  On the other hand, when a charger is `remotely controlled`, it is managed by other machines such as VTUs or conveyors. 

#### Chargers Icon
Chargers can be identified within the system by the following icon below🔽:

![chargers icon](assets/interacting-with-chargers/charger-icon.PNG "chargers icon")

### Charge Pads
Charge pads act as fuel stations where Omni-Moles can power up or recharge⛽. 

#### Charge Pads Icon
These charge pad power stations are indicated by the following icon below🔽:

![charge pad icon](assets/interacting-with-chargers/charge-pad-icon.PNG "charge pad icon")

## Using Charge Pads
Follow these simple steps to charge an Omni-Mole or communicate with a charge pad using an Omni-Mole📟:

### Sending Omni-Moles to Charge via the LHS Toolbox Menu 🧰

On the operations navigation bar, the user should click on the **Toolbox** button🛠️. Once clicked, select the **Manage Traffic** menu in order to `Create Machine Movement`.

![select manage traffic](assets/interacting-with-chargers/select-manage-traffic.png "select manage traffic")

### Select Omni-Mole 📍

Choose the Omni-Mole that is intended for charging and click the **Next** button, when you have selected an Omni-Mole🎯.

![select machine](assets/interacting-with-chargers/select-machine.png "select machine")

### Destination

The user can immediately click the **Next** button to continue as the destination location is not needed⏩. This is due to the Dark Warehouse autonomously selecting the most appropriate charger for the Omni-Mole to go to📌.

![select destination](assets/interacting-with-chargers/select-destination.png "select destination")

### Select Task Type

Once that has been completed, users can select the a **Task Type** of `Go To Charger` and click the **Next** button to complete operation🎉.

![select task type](assets/interacting-with-chargers/select-task-type.png "select task type")

### Sending Omni-Moles to Charge via the Right Click Context Menu✨
Quickly right-click on an Omni-Mole to open the short-cut options⚡. Navigate to `Create Machine Task` and click on `Go To Nearest Available Charger`, done👍.

![quick go to charger](assets/interacting-with-chargers/quick-go-to-charger.png "charger go to charger")

### Get Omni-Mole From Charger
Simply right-click the Omni-Mole and send it to the nearest available location 🖱. The user can alternatively send the Omni-Mole to their desired location, in any case the Omni-Mole will safetly undock from the charge pad and perform an [Interlock](../Interlocks) and proceed to travel to the requested location🛤️.

![send to nearest available location](assets/interacting-with-chargers/send-to-nearest-available-location.png "send to nearest available location")

## Settings For Machine Charging 🎛️

The system offers customizable charge settings that allow users to define the parameters for the Omni-Mole battery🎚️. These settings supply users with information in knowing at what state all Omni-Moles are in and they include:

- **Must Go To Charger**: represents the critical state-of-charge percentage threshold at which an Omni-Mole must immediately proceed to a charge pad. At this threshold, the Omni-Mole will halt any further pallet movement tasks and the system will prioritize urgently routing it to a charge pad🚨.

- **Can Go To Charger**: If an Omni-Mole reports a charge percentage value of 40% or lower, indicates that the Omni-Mole is is permitted to proceed to a charge pad. At this threshold, the Omni-Mole has the option to initiate charging but is not obliged to do so immediately⚠️.

- **Can Leave Charger**: alerts users that the Omni-Mole is allowed to disconnect from the charger. At this level, the Omni-Mole has obtained sufficient charge and may resume its tasks✔️.

- **Full Cycle Cutoff**: an Omni-Mole is permitted to disconnect from the charger after completing a full charging cycle. This ensures that the battery has been fully replenished before resuming operations.🔋.

- **Perform Full Charge Cycle Interval Min**: This is represents the minimum number of **days** in which a single Omni-Mole must go from a critically low battery state of charge to a full state of charge⏳.

- **Perform Full Charge Cycle Interval Max**: This, in turn, represents the maximum number of **days** in which a single Omni-Mole must go from a critically low battery state of charge to a full state of charge⌛.

### Machine Charging Default Settings

It's crucial to note that these settings serve as default configurations applied uniformly across all Omni-Moles and Chargers within the system🎛️.

| Settings For Machine Charging  | Default Values   | 
| ----------                     | -----------      | 
| Must Go To Charger             | 35%              | 
| Can Go To Charger              | 40%              | 
| Can Leave Charger              | 80%              | 
| Full Cycle Cutoff              | 95%              | 

## Chargers & Charge Pad Data Properties 📝

Chargers and Charge Pads have attributes that provide users with information and configuration mechanisms⚙️. These properties help identify chargers and charge pads as well as determine how they behave and operate within the system. Users have the capability to configure settings for each charger and charge pad individually within the system, providing precise control over these entities🔧.

### Chargers Data Properties 🗒️

Setting Charger Data Properties enables users to configure communication parameters and operational characteristics for both the charger and its connected charge pads📋.

| Properties                            | Description                                                                               | 
| ----------                            | -----------                                                                               | 
| ReferenceMachineId                    | The unique identifier of the machine controlling the charger.                             | 
| SubsectionId                          | Identifies the specific subsection to which the charger belongs.                          |
| ChargePadBitMapping                   | A mapping dictionary indicating the correspondence between message bits and charge pads.  |
| SimultaneousChargingEnable            | Indicates whether the charger can power multiple charge pads simultaneously.              |
| MaxNumberOfOnlineChargePads_PerGroup  | The maximum number of charge pads, within a group, that can be simultaneously online.     |
| MaxNumberOfOnlineChargePads_Total     | The maximum number of charge pads controlled by the charger that can be online at once.   |

### Charge Pad Data Properties 🗒️

Configuring Charge Pad Data Properties occurs individually for each charge pad, allowing users to specify its location, navigation instructions, and the charge pad's ability to activate simultaneously with other charge pads✍️.

| Properties                        | Description                                               | 
| ----------                        | -----------                                               | 
| ControllingChargerId              | The unique identifier of the charger controlling the charging pad.| 
| LocationId                        | The unique identifier of the charge pad's location.  |
| LocationType                      | Indicates the type of location where the charge pad is installed. |
| RfidTagId                         | The unique identifier of the RFID Tag associated with the charge pad. |
| RfidTag                           | Information about the RFID tag used by the charge pad.  |
| EntryPointsDirectionAndDistance   | Structured data defining the distance from the entry points of the location to the charger pad. |
| Groups                            | Specifies the charge pad group that the charge pad belongs to, determined by the charger's grouping.  |

This documentation provides comprehensive information on interacting with chargers and charge pads, along with the various charge settings users need to know🎓.