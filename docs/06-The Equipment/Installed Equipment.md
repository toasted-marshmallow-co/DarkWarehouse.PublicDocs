---
sidebar_position: 1
---

# Installed Equipment
Welcome to the backbone of our warehouse automation system! Here, we'll introduce you to the essential equipment that keeps our warehouse ticking. From the tiniest RFID tags to the powerful servers, every piece plays a crucial role in ensuring smooth operations. 

## RFID Tags 🏷
RFID tags are installed in the racking of the warehouse. These little wizards provide a unique identity to every spot in our warehouse, making it a breeze to track and manage our machine asset within the AS/RS and keep track of our vast inventory. 

❓ These tags provide unique identification for each location in the warehouse.

:::note
RFID tags won't always look like the image below. They differ slightly in colour and shape from site to site. Different tags are used for different site conditions.
:::

![Installed RFID Tag Depiction](/img/placeholder-image.png)

## Control Cabinets / Panels 🎛
Housing the brains of our automation equipment, control cabinets (or control panels) are industrial cupboards filled with the tech magic that powers our warehouse. Inside, you'll find the sensor inputs, HMIs and PLCs that are the conductors of our automation symphony.

All the static equipment (like VTUs, chargers, and conveyors) have their own control cabinets. These cabinets are usually located close to the equipment they control.

![Typical Control Cabinet Depiction](/img/placeholder-image.png)

### HMIs 🖥️
HMIs, or Human Machine Interfaces, are user interfaces that allow operators to interact with the warehouse software system. They provide a visual representation of the system's status and allow for control and monitoring of the equipment and processes.

![Typical HMI Depiction](/img/placeholder-image.png)

### PLCs 🖥
PLCs, or Programmable Logic Controllers, are industrial computers that are used to control and automate machinery and processes in the warehouse. They receive data from sensors and other devices, and based on predefined logic, they execute commands to control the equipment.

All the control cabinets will likley have PLCs installed in them. Omni-Mole machines have their own PLCs installed in them as well.

![Typical PLC Depiction](/img/placeholder-image.png)

## IT Infrastructure 💾
The IT infrastructure of the warehouse software system consists of various components that support the overall operation and communication of the system. You can think of the IT infrastructure as the nervous system of our warehouse, ensuring messages are sent, received, and processed without a hitch.

### Servers 🖥 
Servers are powerful computers that store and process data for the warehouse software system. These are often tucked away in server rooms. They handle tasks such as data storage, processing, and communication between different components of the system.

![Typical Server Depiction](/img/placeholder-image.png)

### The Local Area Network 🌐
The Local Area Network (LAN) is a network infrastructure that connects all the devices and components of the warehouse software system within a limited geographical area. It enables communication and data transfer between different devices and systems. 

🛣️ Think of this as the digital highway linking every component, making data transfer and device interaction seamless.

#### WiFi 📶 
WiFi is a wireless networking technology that allows devices to connect to the LAN without the need for physical cables. It provides wireless connectivity for devices such as laptops, mobile devices, and other wireless-enabled equipment within the warehouse.

## The RF Network 📡
The RF (Radio Frequency) network is a proprietary radio network used in the AS/RS. It enables dedicated wireless communication between all the machines and and the Dark Warehouse software.

:::note
In North America, the RF network operates at 920MHz. In Europe and other regions, the network operates at 868MHz. This is due to regional regulations and standards.
:::

### Repeater Radios 📡🔄
Repeater radios are installed on the walls of the warehouse to boost the 920 megahertz RF network signal. They extend the coverage area of the network and ensure reliable communication between devices in different parts of the warehouse.

## The Whisker Server 🐀🖥 
The Whisker server is an industrial server PC specially selected for the operating conditions of that particular site. 🥶 

The server is typically installed in a control panel close to the action. It is on the network and acts as a local gateway for the Dark Warehouse Whisker Software application to communicate with the machinery in the warehouse.

 It has a single connected radio and communicates with all the machines on the RF network. The Whisker server plays a crucial role in enabling seamless integration and control of the warehouse machinery through the software system.

 ![Typical Whisker Server Depiction](/img/placeholder-image.png)