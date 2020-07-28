randomBodyParts = ["head", "arms", "legs", "hips"]
randomAdjectives = ["horrible", "bad", "ugly", "disgusting"]
randomWords = ["milk", "sky", "running", "sword"]
randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)]
randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)]
randomWord = randomWords[Math.floor(Math.random() * 4)]
console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`)


