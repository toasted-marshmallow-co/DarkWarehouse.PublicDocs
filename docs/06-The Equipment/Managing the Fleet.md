---
sidebar_position: 4
---

# Managing the Fleet

This section deals with the basic management of the fleet for a given instance. The management includes the creation of machines, deletion, and - of course - the updating of machine static data (excluding a machine's placement location). 🛠️

:::tip
The __fleet__ comprises all of the pallet transport machines in the system and includes the Omni-Moles and Vtus. 🌐
:::

## Omni-Moles 🤖

Managing the Omni-Mole fleet involves the operations related to creating, deleting, and updating Omni-Mole static data. 🔄

:::note
__Static data__ is the data, as the name suggests, that is not dependent on the machine's state and remains consistent such as the machine's VLP address. 📊
:::

These operations are seldom required as machines are rarely added or removed from systems. They are, however, still important to consider as instances may occur when it's required of the operator to update the Omni-Mole's location data manually so that it accurately reflects where the physical machine is. This can happen when machines are removed from the system for routine maintenance or similar operations. 🔧

### Create 🛠️

The purpose of creating an Omni-Mole is to create new data in the database corresponding to a newly introduced physical machine. Another reason for creating an Omni-Mole could be for the purpose of emulating a system with N machines. 🌟

Regardless of the reason, creating an Omni-Mole involves the following steps.

1. Once on the TMS view, the operator can open the tools menu location on the left-hand side of the screen by clicking on the retractable drawer.

![Tms Tools](assets/fleet-management/tms-view-tools.png)

2. With the drawer open the operator can open the create menu for the current system. 

![Tms Tools](assets/fleet-management/tms-view-tools-create.png)


3. With the create menu open, the operator can then open the __Machine__ specific create menu by selecting the appropriate window.

![Create Menu](assets/fleet-management/tms-view-rhs-menu-machines.png)

4. From here, the operator is required to populate the machine data and to select a location for the machine. Depending on the machine type the operator has selected the operator can click on various location entities in order to place the machine into the system.  The location can be selected by double clicking on any location position on the canvas (apart from Vtu Lanes in the case of Omni-Moles). The location can be updated later so it's not imperative that the location is the current position of the machine although it does help.

![Create Machine](assets/fleet-management/tms-menu-machine-props.png)
![New Location](assets/fleet-management/tms-view-create-machine.png)

5. Once a location has been selected the operator can go ahead and click the create machine button at the bottom of the create machine menu. If all the inputs have been correctly populated the machine should appear and the create operation has been successful. ✔️


### Edit ✏️

The process for updating a machine's static data follows.

1. Firstly, the operator should select the machine they wish to update the properties of by double clicking that machine on the canvas.

![Machine](assets/fleet-management/tms-view-new-machine.png)


1. Next, the operator should open the tools menu on the left-hand side of the TMS view.

![Tools Menu](assets/fleet-management/tms-view-tools.png)

3. Once opened, the operator would then expand the machines subsection on the tools menu. 

![Machine Submenu](assets/fleet-management/tms-view-machine-submenu.png)

4. In the machine subsection in the tools menu, the operator can then click the `Update Properties` option. The update properties menu will open  on the right-hand side of the screen.   

![Update Machine Properties](assets/fleet-management/tms-view-tools-machines-submenu-update.png)

:::note

If the operator has not selected a machine, a modal will appear to indicate this information to the operator.

:::

5. The operator can now update any properties they so desire and complete the operation by clicking on `Update Machine Properties`.

![Machine Props Menu](assets/fleet-management/tms-menu-machine-props.png)

An alternate method to updating machine properties that involves fewer steps is illustrated below.

1. The operator can locate the machine they wish to update and simply right click on the machine to open the relevant context menu. With the context menu open, the operator can select `Update Properties` in order to quickly access the update properties menu.

![Machine Context](assets/fleet-management/tms-menu-machine-context-menu.png)

![Machine Context Properties](assets/fleet-management/tms-menu-machine-context-menu-properties.png)


### Delete 🗑️

On very few occasions, the need may arise to delete Omni-Moles from the system. It should be noted that the operation is irreversible, however a machine can just as easily be created if necessary. 

In order to delete an Omni-Mole from the system, the operator can complete the following steps.
1. Firstly, select the machine by double clicking it on the map.

![Selected Machine](assets/fleet-management/tms-view-new-machine.png)

2. Once a machine has been selected the operator can open the tools menu on the left-hand side of the screen.  

![Tools Menu](assets/fleet-management/tms-view-tools.png)

3. With the toolbar open on the left-hand side of the screen, the operator can expand the machine subsection of the menu

![Machines Submenu](assets/fleet-management/tms-view-tools-machines-submenu-full.png)

4. Within the machine subsection the operator can click the `Delete Machine` option. This will trigger a confirmation modal to pop up to allow the user to opt out should they change their mind. To proceed the operator can click `Confirm Delete` and the selected machine will be deleted from the system.

![Delete Omni-Mole modal](assets/fleet-management/tms-view-delete-machine-modal.png)
 

## Vtus 🚚

As with managing the Omni-Mole fleet, managing the Vtu fleet involves the operations related to creating, deleting, and updating Vtu static data. For the most part, conducting these operations for the Vtus is **the same as** conducting the equivalent operation for Omni-Moles. 🔄

### Create 🛠️

Creating a Vtu in the database is necessary on few occasions. The process follows.

The operator can follow the steps illustrated above in order to open the create machines menu. 

1. Once the machines view is open the operator can select __Vtu__ from the machines dropdown. 

![Create VTU Menu](assets/fleet-management/tms-view-rhs-menu-machines-dropdown.png)

2. After the Vtu has been selected for the machine creation operation an additional section will appear at the bottom of the form. Here, the operator will need to specify additional settings for the Vtu such as the Rfid Tag, the Vtu's length, etc.

:::tip
Vtus can only be placed on Vtu-Lanes (as opposed to Aisles, and Lanes.)
:::

3. When the form has been populated as desired the operator can complete the process by clicking `Create Machine`. ✔️

![Create VTU Confirmation](assets/fleet-management/tms-view-rhs-menu-create-vtu.png)

### Edit ✏️

The process for editing the static properties of the Vtu is effectively the same process as that of the edit for the Omni-Mole.

The only difference is that the operator can opt to `Create Rfid` as a separate process. 

![Update Vtu Properities](assets/fleet-management/tms-view-machine-props-vtu.png)

### Delete 🗑️

The delete process for the Vtu is identical to that of the Omni-Mole - with the only variation being that user should select a Vtu instead of an Omni-Mole.

1. Select a Vtu by double clicking the entity on the canvas.

![Selected Vtu](assets/fleet-management/tms-view-selected-vtu.png)

2. Open the tools menu on the left hand side of the viewport.

![Tools Menu](assets/fleet-management/tms-view-tools.png)

3. Expand the machines submenu.

![Machines Submenu](assets/fleet-management/tms-view-tools-machines-submenu-full.png)

4. Click on the `Delete Machine` option and confirm whether or not the Vtu should be deleted. 

![Delet Vtu Modal](assets/fleet-management/tms-view-delete-machine-modal-vtu.png)
