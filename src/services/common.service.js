export  function getFormattedDate (date){
    if(date===null || date === undefined){
        var d = new Date();

        d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2);

        return d;
    }
    else{
        var d = new Date(date);

        d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) ;

        return d;
   }
}
export function getFormattedDateAllTime(date){
    if(date===null || date === undefined){
        return 0;
    }
    else{
        var d = new Date(date);
        var thisD = new Date();

        return parseInt((thisD-d)/(60*60*1000));
   }
}
