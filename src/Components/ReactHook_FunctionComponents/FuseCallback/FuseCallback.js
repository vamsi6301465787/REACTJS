import React, {  useState,useCallback} from 'react'
import Title from './Title'
import CountAge from './CountAge'
import ButtonAge from './ButtonAge'
import CountSalary from './CountSalary'
import ButtonSalary from './ButtonSalary'


function FuseCallback() {
    const [age,setAge] = useState(25);
    const [salary,setSalary] = useState(10000);

    const ageFunction1=useCallback(()=>{
      setAge(age+1)
    },[age])

    const salaryFunction1=useCallback(()=>{
      setSalary(salary+1000)
    },[salary])

  return (
    <div>
        <Title></Title>
        <CountAge text='Age' value1={age}></CountAge>
        <ButtonAge  age1={ageFunction1} >incrementAge</ButtonAge>
        <CountSalary text='salary' value2={salary}></CountSalary>
        <ButtonSalary  salary1={salaryFunction1}>incrementSalary</ButtonSalary>
    </div>
  )
}

export default FuseCallback