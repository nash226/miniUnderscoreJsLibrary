(function() {
  var _ = function(element) {
    u = {
      first() {
        return element[0]
      },

      last() {
        return element[element.length - 1]
      },

      without(...vals) {
        let newArr = [...element]
        for (let val of vals) {
          newArr = newArr.filter(ele => ele !== val)
        }
        return newArr
      },

      range(...args) {
        let arr = []
        if (args.length > 1) {
          for (let i = args[0]; i < args[1]; i++) {
            arr.push(i)
          }
          return arr
        } else {
          for (let i = 0; i < args[0]; i++) {
            arr.push(i)
          }
          return arr
        }

      },

      lastIndexOf(val) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === val) {
            idx = i;
            break
          }
        }
        return idx;
      },

      sample(qty) {
        var sampled = []
        copy = element.slice()
        get = function() {
          var idx = Math.floor(Math.random() * copy.length);
          ele = copy[idx];
          copy.splice(idx, 1);
          return ele
        }
        if (!qty) {return get(); }
        while(qty) {
          sampled.push(get());
          qty--;
        }
        return sampled;
      },

      findWhere(props) {
        var match;
        element.some(function(obj) {
          var all_match = true

          for (var prop in props) {
            if (!(prop in obj) || obj[prop] !== props[prop]) {
              all_match = false
            }
          }
          if (all_match) {
            match = obj
            return true;
          }
        });
        return match
      },

      where(suppObj) {
        let returnArr = element.slice()
        for (var prop in suppObj) {
          returnArr = returnArr.filter(obj => obj[prop] === suppObj[prop] )
        }
        return returnArr
      },

      pluck(key) {
        return element.map(obj => obj[key])
      },

      keys() {
        let keyArr = []
        for (let prop in element) {
          if (element.hasOwnProperty(prop)) {
            keyArr.push(prop)
          }
        }
        return keyArr
      },

    };
    return u
  }


  _.range = function(...args) {
    let arr = [];
    let start, end;

    if (args.length > 1) {
      start = args[0];
      end = args[1];
    } else {
      start = 0;
      end = args[0];
    }

    for (let i = start; i < end; i++) {
      arr.push(i);
    }

    return arr;
  }

  window._ = _;
})();


