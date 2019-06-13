const students = [
    { name: "Thuong", age: 20, grade: 4, gender: true },
    { name: "Thuy", age: 20, grade: 2, gender: false },
    { name: "Ly", age: 20, grade: 7, gender: true },
    { name: "Huong", age: 30, grade: 9, gender: false }
    ];
    
    // students.map()...
    
    function myMap(arr, cb) {
    let returnResults = [];
    for (let i = 0; i < arr.length; i++) {
    returnResults.push(cb(arr[i]));
    }
    return returnResults;
    }
    let a =myMap(students, item=>item);
    console.log(a);


 
    
    Array.prototype.myMap = function(cb) {
    let returnResults = [];
    for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    returnResults.push(cb(this[i]));
    }
    return returnResults;
    };
    let c = students.myMap(item => item);
    console.log(c);
 
    

    // --------------- filter    


        Array.prototype.myFilter = function(cb) {
            let returnResults = [];
            for (let i = 0; i < this.length; i++) {
            if (cb(this[i])) {
            returnResults.push(this[i]);
            }
            }
            return returnResults;
            };
            let d =students.myFilter(item=>{return item.grade >5});
            console.log(d);




            // // -------------reduce --------------


            function myReduce(arr) {
                let sum =0;
                let a =0;
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i].grade >=5){
                        a++;
                        sum = (sum+ arr[i].grade);
                        
                    }
                }
                return sum/a;
                };
                
                let f =myReduce(students);
                console.log(f)


       

