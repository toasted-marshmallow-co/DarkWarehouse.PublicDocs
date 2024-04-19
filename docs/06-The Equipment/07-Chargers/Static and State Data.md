---
sidebar_position: 2
---

# Static and State Data

The Charger and Charger Pad's static and state data are essential for ensuring efficient energy management and operational continuity in warehouse automation systems. Below is a detailed table of these data fields.

## Charger: Static Data

Static data for chargers is set once during the initial setup or installation and remains constant throughout their operational life.

| Field                    | Description                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| **Identifier**           | The unique identifier for the Charger, crucial for tracking and management.                         |
| **VLP Address**          | Virtual Link Protocol Address used for network communication within the automated system.           |
| **Machine Type**         | Defines the Charger's category, indicating its capabilities and design specifications.              |
| **Description**          | Provides a summary of the Charger's functions within the energy management systems.                 |
| **Serial Number**        | A distinct number given at production, used for service, maintenance, and historical tracking.      |
| **Warehouse Section**    | Designated operational area in the warehouse for the Charger, determining its primary working zone. |
| **Subsection ID**        | Identifies the specific subsection within the warehouse where the Charger is located.               |
| **Reference Machine ID** | Links to the specific machine or system that this Charger is primarily associated with or serves.   |

## Charger: State Data

State data reflects real-time information about the Charger's operational status and environment.

| Field                      | Description                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Operational Level**      | The specific floor or vertical range where the Charger operates, useful for managing energy distribution across different levels.                                                      |
| **Error Status**           | Reflects current errors or issues needing attention, detailed with specific codes for various types of operational malfunctions.                                                       |
| **Current Mode**           | Describes the Charger's operating state, including:<br/>• **Manual**: Direct operator control.<br/>• **Auto**: Fully autonomous operation.<br/>• **Setup**: Configuration adjustments. |
| **Battery Life**           | Displays the current battery percentage of connected equipment, critical for planning recharges.                                                                                       |
| **Online Status**          | Shows whether the Charger is ready to provide energy, crucial for scheduling and operational planning.                                                                                 |
| **Charging Status**        | Shows if the Charger is currently active, vital for energy management and operational continuity.                                                                                      |
| **Max Charge Pads Active** | Maximum number of charge pads that can be active at once, crucial for managing multiple charging operations simultaneously.                                                            |
| **Simultaneous Charging**  | Indicates if the Charger supports charging multiple devices at the same time, enhancing efficiency.                                                                                    |

## Charger Pad: Static Data

Static data for charger pads outlines the fundamental characteristics set during installation.

| Field           | Description                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Identifier**  | The unique identifier for the Charger Pad, crucial for tracking and management.                                             |
| **Location ID** | The specific location within the facility where the Charger Pad is installed, used for logistical and operational planning. |
| **Level**       | The operational level or floor where the Charger Pad is situated, relevant for vertical movement coordination.              |
| **RFID Tag ID** | Identifier for the RFID tag associated with the Charger Pad, used for precise location tracking and system integration.     |

## Charger Pad: State Data

State data provides insights into the real-time operational status of the Charger Pad.

| Field                 | Description                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Operational Level** | Indicates the specific vertical range or floor where the Charger Pad operates, crucial for managing charging tasks across different levels.                              |
| **Error Status**      | Current error codes indicating any operational issues that need attention.                                                                                               |
| **Online Status**     | Shows whether the Charger Pad is operational and ready to charge devices, essential for energy management.                                                               |
| **Charging Status**   | Indicates whether the Charger Pad is actively charging a device, vital for fleet management and operational continuity.                                                  |
| **Entry Points**      | Lists the directions and distances from entry points to the Charger Pad, important for automated systems to navigate accurately to the charging location.                |
| **RFID Tag Details**  | Provides information on the RFID tag linked to the Charger Pad, including the tag type and data content, essential for system integration and precise location tracking. |
