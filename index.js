// Code your solution in this file!
// Distance from Headquarters

let headQuarters = 42

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - headQuarters
    } else {
        return headQuarters - blockNumber
    } 

}

function distanceFromHqInFeet(blockNumber) {
    if (blockNumber > 42) {
        return (blockNumber - headQuarters) * 264
    } else {
        return (headQuarters - blockNumber) *264
    }
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    if (startingBlock < destinationBlock) {
        return (destinationBlock - startingBlock) * 264
    } else {
        return (startingBlock - destinationBlock) * 264
    }
}


function calculatesFarePrice(beginPoint, endPoint) {
    let distanceInFt = distanceTravelledInFeet(beginPoint, endPoint)
    if (distanceInFt <= 400) {
        return 0
    }
    else if (distanceInFt <= 2000 && distanceInFt > 400) {
        return (distanceInFt - 400) * 0.02
    }
    else if (distanceInFt > 2000 && distanceInFt < 2500) {
        return 25
    }
    else {return "cannot travel that far"}
}


