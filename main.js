
  function R (x, y, z) {
    return (((7.8 * Math.pow(x, 2)) + (3.52 * y)) / (Math.log(x + 2 * z) + (Math.exp(z))))
  }
  console.log(R(1, 1, 1))
  console.log(R(2, 2, 2))
  console.log(R(process.argv[2], process.argv[3], process.argv[4]))
  console.log(process.argv)
