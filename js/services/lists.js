app.factory('lists', lists);

function lists() {
    
   var data = [{id:1, name: 'shubi dubi', value: null}];
   function getData() {
       return data;
   }
   function setData(newList) {
        data.push({value: newList});
   }
   return {
       getData: getData,
       setData: setData,
   }
 }