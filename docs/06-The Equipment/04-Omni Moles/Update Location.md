---
sidebar_position: 5
---

# Update Location
The Omni-Mole location can be updated for any number of reasons. 

:::warning

Updating the Omni-Mole location in the system will not result in the physical machine's location updating in real life. 🌐 In order to do this, the operator would need to create a __Machine Task__. 📝 Updating the Omni-Mole location will result in the data stored within the database being updated to reflect the operator's changes. 💾

:::

In order to update the Omni-Mole's location, the operator can follow these steps:

1. If the operator wishes to relocate the Omni-Mole within the system, they should select the location they wish to move the machine to. 📍

:::tip

Ensure the __cursor__ is in `Select Singular` mode. ✅

:::

![Selected Location](assets/update-location/systems-view-selected-location.png)


2. Locate the machine within the system that you wish to update the location for. 🔍

![Selected Machine](assets/update-location/systems-view-selected-machine.png)


3. Right-click on the machine once it's been located. This will trigger the context menu to appear. 🖱️

![Omni-Mole Context](assets/update-location/raw/systems-view-omnimole-context-raw.png)

4. Select `Update Location` in the context menu. 📌

![Update Location](assets/update-location/systems-view-omnimole-context.png)

5. At this point, the user can either update the machine to a specified location, or to be 'Outside the system'. If the user opts for the latter, step 1 can be safely ignored. 🌐
   
![Update Location Context](assets/update-location/systems-view-omnimole-context-update-location.png)
![Update Location Success](assets/update-location/systems-view-omnimole-context-update-location-success.png)
                                                   
An alternative method to complete the same task, depending on what the operator prefers:

1. Open the tools menu on the left-hand side of the screen. 🧰

![Tools menu icon](assets/update-location/systems-view-tools-menu-icon.png)
![Tools menu open](assets/update-location/systems-view-tools-menu.png)

2. Select `Manage Traffic` and then `Machines`. 🚦

![Tools menu manage traffic](assets/update-location/systems-view-tools-menu-traffic.png)

3. Select `Update Machine Location` from the options available. 🔄

![Tools menu update machine location](assets/update-location/systems-view-tools-menu-traffic-machines.png)

4. Follow the steps presented by the form:

   1. Select a machine. This can be done either by opening the machine table using the `Select Machine` button or by clicking the machine on the canvas. 🖼️

    ![Tools menu update location form select machine](assets/update-location/systems-view-tools-menu-traffic-machines-select.png)
    ![Tools menu update location form select machine modal](assets/update-location/systems-view-tools-menu-traffic-machines-select-modal.png)

   2. Select a valid location following the same process as step one. Remember, Omni-Moles can only be updated to Lanes, Vtus, and Aisles. 🗺️

    ![Tools menu update location form select location](assets/update-location/systems-view-tools-menu-traffic-machines-select-location.png)
    ![Tools menu update location form select location modal](assets/update-location/systems-view-tools-menu-traffic-machines-select-location-modal.png)

5. Complete the process by clicking the `Update` button. ✅

:::note
Machines cannot be updated to locations where other machines are present. 
:::