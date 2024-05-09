---
sidebar_position: 4
---

# Rejections⛔
Pallets that fail to meet specified standards may be rejected. This will involve notifying the user and in some cases moving the pallet to a reject location.

## Failed to read the barcode

If the scanner fails to scan the barcode the pallet will be rejected.

### Possible Causes❓
1) There is no barcode on the pallet
2) The barcode is obstructed
3) The pallet is not aligned with the scanner

### Rejection Process⚙️
1) A new rejection pallet is created with a 0 barcode.
2) The new rejection pallet is updated to the scan in location.
3) The new rejection pallet is taken to a rejection location.

### Solution🔧
1) Check if there is a barcode on the pallet.
2) Clear any obstructions for the barcode such as a plasict covering etc.
3) Re-align the barcode with the scanner.
4) Re-scan the pallet. 

## Failed to find the pallet

If no pallet has the barcode scanned, the pallet will be rejected.

### Possible Causes❓
1) The pallet has not been created in the system.
2) The pallet has been deleted from the system.

### Rejection Process⚙️
1) A new rejection pallet is created with the barcode read from the scanner.
2) The new rejection pallet is updated to the scan in location.
3) The new rejection pallet is taken to a rejection location.

### Solution🔧
1) Request the client to resend the inbound request for the barcode scanned.
2) Re-scan the pallet. 

## No inbound movement task for pallet

If barcode scanned is for a pallet without an inbound movement, the pallet will be rejected.

### Possible Causes❓
1) The pallet has been manually created.
2) The pallet has been automatically created but the inbound movement was cancelled.

### Rejection Process⚙️
1) The pallet is updated to the scan in location.
2) The pallet is taken to a rejection location.

### Solution🔧
1) Delete the pallet from the system.
2) Request the client to resend the inbound request for the pallet.
3) Re-scan the pallet. 

## Pallet already in the store

If barcode scanned is for a pallet already in the store, the pallet will be rejected.

### Possible Causes❓
1) The pallet in the store has an incorrect barcode.
2) The pallet scanned has a duplicated barcode.

### Rejection Process⚙️
1) A new rejection pallet is created with the barcode read from the scanner.
2) The new rejection pallet is updated to the scan in location.
3) The new rejection pallet is taken to a rejection location.

### Solution🔧
1) Verify the pallet in the store has the correct barcode, if not update the barcode in the system.
2) Change the barcode on the new pallet being scanned into the system.
3) Re-scan the pallet. 

## Failed dimension check

If the pallets dimensions are greater than allowed for the system or not within the expected range for the pallet, the pallet will be rejected.

### Possible Causes❓
1) The pallets wrapping is obstructing of the scanner.
2) The pallet is not aligned with the scanner.
3) The pallet is not packed correctly.

### Rejection Process⚙️
1) The pallet is updated to the scan in location.
2) The pallet is taken to a rejection location.

### Solution🔧
1) Remove any wrapping hanging off the pallet.
2) Re-align the pallet
3) Repack the pallet.
4) Re-scan the pallet. 

## Failed weight check

If the pallets weight is greater than allowed for the system or not within the expected range for the pallet, the pallet will be rejected.

### Possible Causes❓
1) The pallets expected weight is incorrect.
2) The pallet is too heavy for the system.

### Rejection Process⚙️
1) The pallet is updated to the scan in location.
2) The pallet is taken to a rejection location.

### Solution🔧
1) Update the expected weight of the pallet if it is incorrect.
2) Verify the weight of the pallet and repack if necessary.
3) Re-scan the pallet. 