// The Tower of Hanoi problem 
console.log(`-----------------------------The Tower of Hanoi problem --------------------------------------`);
console.log(`-----------------------------------Solution 1--------------------------------`);


function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
}

towerOfHanoi(5, 'A', 'B', 'C');

console.log(`--------------------------------Solution 2-----------------------------------`);
  
let towerOfHanoi2 = (n, startPeg = 1, endPeg =3) => {
    if (n) {
        towerOfHanoi2(n - 1, startPeg, 6-startPeg-endPeg);
        console.log(`Move disk ${n} from ${startPeg} to ${endPeg}`);
        towerOfHanoi2(n - 1, 6-startPeg-endPeg, startPeg);
    }
}

towerOfHanoi2(5);

console.log(`---------------------------------Solution 3----------------------------------`);
function towerOfHanoiIterative(n, sourceRod, auxiliaryRod, targetRod) {
    const stack = [];
    let moves = 0;
    let disks = n;
  
    if (n % 2 === 0) {
      // If the number of disks is even, swap auxiliary and target
      [auxiliaryRod, targetRod] = [targetRod, auxiliaryRod];
    }
  
    while (disks > 0) {
      const legalMove = moves % 3;
      switch (legalMove) {
        case 0:
          if (canMove(disks, sourceRod, targetRod)) {
            moveDisk(sourceRod, targetRod);
            disks--;
          }
          break;
        case 1:
          if (canMove(disks, sourceRod, auxiliaryRod)) {
            moveDisk(sourceRod, auxiliaryRod);
            disks--;
          }
          break;
        case 2:
          if (canMove(disks, auxiliaryRod, targetRod)) {
            moveDisk(auxiliaryRod, targetRod);
            disks--;
          }
          break;
      }
      moves++;
    }
  
    function canMove(disk, sourceRod, targetRod) {
      return sourceRod[disk] < targetRod[disk] || targetRod[disk] === 0;
    }
  
    function moveDisk(sourceRod, targetRod) {
      // Find the disk to move
      let diskToMove;
      for (let i = 1; i <= n; i++) {
        if (sourceRod[i] > 0) {
          diskToMove = sourceRod[i];
          sourceRod[i] = 0;
          break;
        }
      }
  
      // Place the disk onto the targetRod
      for (let i = 1; i <= n; i++) {
        if (targetRod[i] === 0) {
          targetRod[i] = diskToMove;
          break;
        }
      }
  
      console.log(`Move disk ${diskToMove} from ${sourceRod.name} to ${targetRod.name}`);
    }
  }
  
  const sourceRod = { name: 'A', 3: 3, 2: 2, 1: 1 };
  const auxiliaryRod = { name: 'B', 3: 0, 2: 0, 1: 0 };
  const targetRod = { name: 'C', 3: 0, 2: 0, 1: 0 };
  
  towerOfHanoiIterative(3, sourceRod, auxiliaryRod, targetRod);
  


console.log(`----------------------------------------------------------------------`);
