---
sidebar_position: 2
---

# Location Locks

Location locks are dynamic abstractions of location states within the AS/RS system. Locations by themselves are static entities but can be made dynamic through the use of location locks. The manner in which Machines (particularly OmnimMole and Vtus) can move around the system is in no small part dicated by the lock configuration of the system.
That said, certain lock types are not imperative to the functionality of the traffic management or warehouse management systems.

There are various lock types within the AS/RS system and each serves a unique purpose.

## TMS Locks

TMS Locks are locks in the context of the Traffic Managment System. 
There are a few types of these including:

- Manual Locks
- Subtask Locks
- Recovery Locks
- Invalid Locks

### Manual Locks

Manual locks, as the name suggests, can be created manually by the operators and their function is to prevent machines from travelling to or through specific locations.

For example, if the operator decides to lock an aisle the OmniMole will not be able to travel over or directly to that location entity. If a user decides to lock a Vtu lane, a Vtu will not be able to travel to or through that locked location. 

This can be very useful for a number of cases when strategizing routes that OmniMoles can take. It can also be used as a safety mechanism of sorts. If an incident has occurred within the AS/RS store, the operator can effectively redirect traffic from the affected area.

:::tip

Manual locks will directly affect the manner in which routes are established for Omni-Moles. For this reason they should be used intentionally and strategically as their placements can directly affect system throughputs.

:::

:::note
Manual locks are the only lock type that the operator will be able to create and remove directly. 
:::

#### Locking a Location

A user can lock any specific location by following the procedure:

1. Right click on the location that needs to be locked. 
> Insert figure of lock and notification
3. Click on the `Lock` button in order to create a lock at the location
> Insert figure of lock and notification
> Insert figure of lock and notification


#### Locking multiple Locations

> Insert figure of lock and notification
> Insert figure of lock and notification
> Insert figure of lock and notification


#### Unlocking a Location

> Insert figure of lock and notification
> Insert figure of lock and notification


#### Unlocking multiple Locations

> Insert figure of lock and notification
> Insert figure of lock and notification
> Insert figure of lock and notification


### Subtask Locks

Subtask locks can **not** be created directly by the operator. Instead, they are used by TMS to __lock out__ a route for Omni-Moles that are actively performing tasks. Typically, when a pallet is required to move through the system, an Omni-Mole will be assigned to it. After machine assignment route calculations occur. The TMS attempts to calculate the most effective route given a dynamic set of inputs, and the outcome is a path of locations that form a cohesive route. These locations are then locked so that other machine traffic can not interfere with the Omni-Mole carrying out the task. 

Subtask locks are visible for brief periods at a time and the system will go about creating and clearing these automatically. 

> Insert figure of subtask locks

### Recovery Locks

Recovery locks can **not** be created directly by the operator. Recovery locks are created within the system when an issue occurs during normal operations. If, for example, an error has occurred within the system and an Omni-Mole has come to a halt and requires operator intervention the machine will be set to an error state and the location on which the machine is located will have a recovery lock created for it. These locks can be removed or resolved through interacting with the notification which will appear at the same time as the lock itself. 

> Insert figure of lock and notification

### Invalid Locks

Invalid locks can **not** be created directly by the operator. Invalid locks are created automatically when data insecurity has occurred within the system. This implies that some event has led to uncertainty within the autonomous operations of the system and as result there is some data that will need to be manually validated by the operator before the operations and task surrounding the invalidity have been resolved.

## WMS Locks

WMS Locks are locks in the context of the Warehouse Management System.

### Selected Pallet Retrieve Lock

Pallet retrieval locks can be created by the operator. 
The purpose of pallet retrieval locks is to allow the user to 


- To define whether a pallet can be deposited or retrieved 

### Selected Pallet Deposit Lock

