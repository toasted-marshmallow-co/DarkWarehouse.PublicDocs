---
sidebar_position: 6
---

# Routing
Routing is the process of finding the path an Omni-Mole will take to perform a task 🛣️. 

It is created by analysing the current state of the system, specifically the zones the Omni-Mole is in, and choosing the best path that navigates around any obstacles in the system.

Routing makes up to four attempts with different requirements:
1) Find a route through a **vtu with the least number of tasks** and **without any temporary obstacles**.
2) Find a route through a **vtu with the least number of tasks** and **with temporary obstacles**.
3) Find a route through **without any temporary obstacles**.
4) Find a route through **with any temporary obstacles**.

If the system fails to find any of the above routes, the task will not be performed. At this point you may need to look into what permanent obstacles exist in the system that coud be causing routing to fail.

## Routes Required for Tasks

Different tasks require different routes, this is discussed below.

### Generic Tasks🛣️

Generic Tasks require a single route from the Omni-Mole's current location to the task's destination location.

### Pallet Task🚚

Pallet Tasks requires two routes. 
1) A route from the Omni-Mole's current location to the pallet's current location. 
2) A route from the pallet's current location to the task's destination location. 

If the second route cannot be performed then the first route will also not be performed.

### Multi-Pallet Task🔁

Multi-Pallet Tasks require a single route from the Omni-Mole's current location to the task's destination location.