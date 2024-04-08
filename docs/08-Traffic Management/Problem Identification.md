---
sidebar_position: 8
---

# Problem Identification

During warehouse operations, the system may rarely encounter issues that could possibly affect the traffic work flow. Users are also regularly notified of any error occurance through the Darkwarehouse notification system🔔. The documentation discussed below are identification techniques and methods used to recognize as well as diagnose certain common issues in the system that are not necessarily notified to users.

## Unresponsive Whisker

This occurs when the Whisker does not communicate with the Darkwarehouse System🔇. It can be identified when a `Live Status Request` has been performed and no response is given back to the system📡. Upon this instance the user can then request for the Whisker to be restarted in order to refresh the communication configurations.

## Task Discontinuation

Tasks that are allocated to machines, at times, may not complete due to various issues that could possibly occur during the task. The Omni-Mole with the task assigned may not be configured to that specific zone or the source location and destination is possibly not currently available🚫. Users can potentially overcome these obstacles by:

- **Checking if the Omni-Mole is in the correct zone👍.**
- **Ensuring that both source location and destination are accessible.**

## Omni-Mole Stalled At VTU Without Retrieving Pallet

Miscommunication between machines is an occurance that does not often happen🤖. It can be easily identified by users monitoring the interaction of the two machines and observing if the Omni-Mole is not interlocking with the VTU in order to retreive the pallet🧐. Upon this event the user can simply do the following: 

- **Analyze the database to see if the Omni-Mole is selected for another task and if so, find the task and retry it🔄.**

## WMS: Outbound Task Initialization Failure

In some instances Outbound tasks may encounter unforseen obstacles that prevent the Outbound task from being performed or initialized🚧. These obstacles may be caused by occupied locations in the system, which result in the Outbound task unable to allocate a location for the desired pallet. A small check list users can tick to potentially resolve these challenges include📋:

- **Identifying available locations that can accomodate the required pallet📍.**
- **Ensure that the alocated location is within a zone that the Omni-Mole is able to operate in.**
- **Check WMS Policies allow the outbound task to be performed with the provided parameters.**
- **Ensure that the Outbound scheduled time is correctly set for when the Outbound task is expected to be complete or performed⏱️.**

## Persistent Pallet Rejection

The Inbound process, using Conveyors, in other cases will reject pallets due to unexpected circumstances. This state of constant rejection can occur due to pallet dimensions or sizes not meeting the required pallet definitions selected📐. When the system encounters this event, users can then use the following to try and rectify the rejection problem❌:

- **Confirm the reasons for rejection are accurate and are understandable.**
- **Check that the pallet was successfully transferred onto the conveyor with the correct data requirements📄.**
- **Ensure that the conveyor sensors are cleared from dust or obstructions that could possibly interrupt the conveyor's clear pallet reading process🎇.**

## Movement Jousting Between Moles

Instances where Omni-Moles are unable to determine their destination result in a situation that can be known as movement jousting🤺. In this scenario, Omni-Moles move back and forth in a stalemate due to conflicting individual tasks assigned to them▶️◀️. A resolution to this issue involves implementing the following method:

- **Switch Off one of the Omni-Mole's ability to move pallet's, in order to better control the traffic🚦.**

:::note
Upon encountering these issues, please kindly report these obstacles in order for our developers to record possible causes for the errors so that they can then engineer accurate and permenant solutions👨‍💻.
:::

These issues are currently being analyzed as part of an ongoing effort to find permanent solutions, with a strong collaboration from users to ensure a clean and smooth experience✨.