let batteryBatches = [4, 5, 3, 4, 4, 6, 5];



let totalBatteries = batteryBatches.reduce((acc, value) => acc + value, 0);
console.log(totalBatteries);
