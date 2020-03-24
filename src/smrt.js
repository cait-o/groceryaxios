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
              label: 'MRT ridership',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"hotpink",
              backgroundColor:'hotpink',
              fill:false
            },
            {
                label: 'LRT ridership',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"deepskyblue",
                backgroundColor:'deepskyblue',
                fill:false
              },
              {
                  label: 'Bus ridership',
                   data:[],
                  //backgroundColor:['aqua','lightgreen','red','orange'],
                  borderWidth:0.5,
                  borderColor:"limegreen",
                  backgroundColor:'limegreen',
                  fill:false
                },
                {
                    label: 'Taxi ridership',
                     data:[],
                    //backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth:0.5,
                    borderColor:"gold",
                    backgroundColor:'gold',
                    fill:false
                  }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        var dic;
        for (dic of this.results) {
            
            if (dic['type_of_public_transport']=="MRT") {
            this.chartdata.datasets[0].data.push(dic['average_ridership'])
            this.chartdata.labels.push(dic['year']+'')
            }
            else if (dic['type_of_public_transport']=="LRT") {
                this.chartdata.datasets[1].data.push(dic['average_ridership'])
                //this.chartdata.labels.push(dic['year']+'')
            }
            else if (dic['type_of_public_transport']=="Bus") {
                this.chartdata.datasets[2].data.push(dic['average_ridership'])
               // this.chartdata.labels.push(dic['year']+'')
            }
            else if (dic['type_of_public_transport']=="Taxi") {
                this.chartdata.datasets[3].data.push(dic['average_ridership'])
             //   this.chartdata.labels.push(dic['year']+'')
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