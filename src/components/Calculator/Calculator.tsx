import React, { useEffect, useState } from "react"
import { Box, Button, Heading } from "theme-ui"
import Table from "react-bootstrap/Table"
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@material-ui/core"

type ItemProps = {
  Item: number
  Watts: number
  Hours: number
  Quantity: number
}

const styles = {
  buttonStyle:{
    borderRadius:"30px",
    height:"50px",
    fontFamily:"Montserrat,sans-serif",
    fontSize:"16px",
    width:"150px",
    transition: "0.3s",
    cursor:"pointer",
    margin:"auto",
    marginY:"30px",
    marginX:"10px",
    "&:hover":{
        color:"#002A4C",
        background:"transparent",
        border:"2px solid #002A4C"
    },
    "&:active":{
        color:"#002A4C",
        background:"transparent",
        border:"2px solid #002A4C"
    },
    '@media (min-width:1150px )': {
        borderRadius:"30px",
        height:"50px",
        width:"170px",
        fontSize:"18px"
      },
      '@media (max-width:1149px) and (min-width:301px )': {
        borderRadius:"30px",
        height:"50px",
        width:"150px",
        fontSize:"16px"
      },
      '@media (max-width:529px) and (min-width:301px )': {
        width:"85%",
    marginY:"10px",
    marginX:"5%",
      },
    '@media (max-width:300px )': {
    marginY:"10px",
    width:"95%"
      }
}
}

const Calculator = () => {
  const [Item, setItem] = useState<ItemProps>({
    Item: 0,
    Watts: 0,
    Hours: 0,
    Quantity: 0,
  })
  const [Items, setItems] = useState<ItemProps[]>([
    { Item: 0, Watts: 0, Hours: 0, Quantity: 0 },
  ])
  const [Units, setUnits] = useState<number>(0)
  const [KWatts, setKWatts] = useState<number>(0)

  const [size, setSize] = useState<number>(370)
const panelSizes:number[] = [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400];


  const checkIt = (Items: ItemProps[]) => {
           
      if(Items.length !== 0){
        let it = Items.filter(
          val =>
            (val.Quantity !== 0 &&
            val.Hours !== 0 &&
            val.Watts !== 0 &&
            val.Quantity !== NaN &&
            val.Hours !== NaN &&
            val.Watts !== NaN)
        )
        if(it.length !== 0){setUnits(
              it
                .map(item => item.Watts * item.Hours * item.Quantity)
                .reduce((total, num) => total + num) / 1000
            );
            setKWatts(it.map(item => item.Quantity * item.Watts).reduce((total, num) => total + num))
          }
            else{
              alert("please add the item");
            }
      }else{
        alert("please add the item");
      }
  }

  useEffect(() => {
    console.log("Items :", Items)
  }, [Items, Item])
  return (
    <Box sx={{"@media(max-width : 500px)":{overflow:"scroll"}}} >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Appliance</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Power Rating (Watts)</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Average Daily Usage (Hours)</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((itm, i) => (
            <tr key={i}>
              <td>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Item
                  </InputLabel>
                  <NativeSelect
                    defaultValue={Item}
                    onChange={e => {
                      setItem({
                        ...Item,
                        ...{ Item: parseInt(e.target.value) },
                      })
                    }}
                  >
                    <option value={0}>None</option>
                    <option value={5}>Energy Saver</option>
                    <option value={6}>Tube Lights</option>
                    <option value={7}>LED Bulb</option>
                    <option value={8}>Fans</option>
                    <option value={9}>TV</option>
                    <option value={10}>LED TV</option>
                    <option value={11}>Computer</option>
                    <option value={12}>Refrigerator</option>
                    <option value={13}>Fridge</option>
                    <option value={14}>Washing Machine</option>
                    <option value={15}>Water Pump 1 HP</option>
                    <option value={16}>Iron</option>
                    <option value={17}>Split AC</option>
                    <option value={18}>Inverter AC</option>
                    <option value={19}>Microwave</option>
                  </NativeSelect>
                </FormControl>
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  type="number"
                  onChange={e => {
                    if(Items.length === i){
                      setItem({ ...Item, ...{ Watts: parseInt(e.target.value) } })
                    }else{Items[i].Watts = parseInt(e.target.value)}
                    
                  }}
                  label="Watts"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  type="number"
                  onChange={e => {
                    if(Items.length === i){
                    setItem({ ...Item, ...{ Hours: parseInt(e.target.value) } })
                    }else{Items[i].Hours = parseInt(e.target.value)}
                    
                  }}
                  label="Hours"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  type="number"
                  onChange={e => {
                    if(Items.length === i){setItem({
                      ...Item,
                      ...{ Quantity: parseInt(e.target.value) },
                    })}else{Items[i].Quantity = parseInt(e.target.value)}
                    
                  }}
                  label="Quantity"
                  variant="standard"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        sx={{ bg: "green" ,...styles.buttonStyle}}
        onClick={() => {
          setItem({ Item: 0, Watts: 0, Hours: 0, Quantity: 0 })
          setItems([...Items, Item])
        }}
      >
        Add Item
      </Button>
      <Button
        sx={{ bg: "red" ,...styles.buttonStyle}}
        onClick={() => {
          let copy = Items;
          copy.pop();
          setItems([...copy]);
          console.log("Items :", copy)
        }}
      >
        Remove Item
      </Button>

      <Button
        sx={{ bg: "blue" ,...styles.buttonStyle}}
        onClick={() => {
          checkIt(Items)
        }}
      >
        Calculate
      </Button>
      <Heading>Estimated Calculation</Heading>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Units(KWh)</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Watts(W)</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>Solar Required</th>
            <th style={{fontFamily:"Montserrat, sans-serif"}}>NO. of Solar Panels
            <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Solar Panel Size
                  </InputLabel>
                  <NativeSelect
                    defaultValue={size}
                    onChange={e => {
                      setSize(parseInt(e.target.value))
                    }}
                  >
                  {panelSizes.map((size,i)=>
                    (
                    <option key={i} value={size}>{size} Watts</option>
                  ))}
                  </NativeSelect>
                </FormControl>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
              {Units}
            </td>
            <td>
              {KWatts}
            </td>
            <td>
              {(Units*1.5)} kw
            </td>
            <td>
              {Math.ceil(Units/(size/1000))}
            </td>
            
          </tr>
        </tbody>
        </Table>

    </Box>
  )
}

export default Calculator
