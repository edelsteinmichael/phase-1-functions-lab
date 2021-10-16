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

let free = 0
function calculatesFarePrice(beginPoint, endPoint) {
    let distanceInFt = (endPoint - beginPoint * 264)
    if (distanceInFt < 400) {
        return free 
     }
    else if (beginPoint > endPoint) {
        distanceInFt = (beginPoint - endPoint *264)     
     (distanceInFt - 400 > 400 && distanceInFt - 400 < 2000)
        return (distanceInFt - 400) * 0.02
    }
    
}


