import React  from 'react';
import Child from './Child';

function Mapf(){

    const listItems = [

        'vamsi',
        'ravi',
        'suresh'
    ]

    const persons=[
        {
            id:1,
            name: 'vamsi',
            course: 'cse'

        },
        {
            id:2,
            name: 'suresh',
            course: 'cse'

        },
        {
            id:3,
            name: 'ravi',
            course: 'cse'

        },
        {
            id:4,
            name: 'karthik',
            course: 'cse'

        },
        

    ]

      
     const personlist=persons.map(person=><Child person={person}></Child>)

    const allitems= listItems.map(items=><h1>{items}</h1>)
    return(
        <div>
            {/* type-1 */}
            {/* we have use { } to evaluate the expression */}

            {listItems[0]},
            {listItems[1]},
            {listItems[2]}   

            <hr></hr>

            {/* type-2 */}

            <div>
                {/* we have use { } and write the map function
                {

                  listItems.map(items=><h1>{items}</h1>)

                } */}
            </div>
          
            {/* type-3 */}

            <div>
                <h1>{allitems}</h1>
            </div>

            {/* type-4 */}

            <div>
              {/* {
                persons.map(person=>

                <div>
                    <h1>
                        I am {person.name} the id {person.id} course is {person.course}
                    </h1> 
                    
                </div>)
              } */}
            </div>

            <div>
                {personlist}
            </div>

          
            
        </div>
    )

}
export default Mapf