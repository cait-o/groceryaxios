import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Total COVID-19 cases',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"turquoise",
              backgroundColor:'turquoise',
              fill:false
            }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        var dic;
        let mySet = new Set();
        for (dic of this.results) {
            var day = dic['timestamp'].substring(8,10)
            if (!mySet.has(day)) {
                mySet.add(day)
                this.chartdata.datasets[0].data.push(dic['cases'])
                this.chartdata.labels.push(dic['timestamp'].substring(0,10)+'')
            }
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}