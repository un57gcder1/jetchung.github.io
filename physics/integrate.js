function pX(t) {
    //return 0;
    return t;
  }
  
  function pY(t) {
    //return 5*Math.cos(2*Math.PI * t)
    return 13 * Math.cos(t * 2 * Math.PI) - 5 * Math.cos(2 * t * 2 * Math.PI) - 2 * Math.cos(3 * t * 2 * Math.PI) - Math.cos(4 * t * 2 * Math.PI);
  }

function integrate (f, start, end, step) {
    let total = 0
    step = step || 0.01
    for (let x = start; x < end; x += step) {
      total += f(x + step / 2) * step
    }
    return total
  }

console.log(integrate(pY, 0, 1, .000000999));