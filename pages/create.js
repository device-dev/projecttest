import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useRouter } from 'next/router'
import {
    FormControlLabel,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    TextField,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    Radio,
    Autocomplete,
    Button
} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
    customercheck
} from '../libs/member'
import Modalcreate from '../components/createCase'
import axios from 'axios'


export async function getStaticProps() {
    const typecase = await axios.get('http://localhost:3000/api/typecase', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const property = await axios.get('http://localhost:3000/api/property', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const customer = await axios.get('http://localhost:3000/api/customer', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const dataproperty = property.data;
    const datatype = typecase.data;
    const datacustomer =   customer.data;
    return {
        props: {
            datatype,
            dataproperty,
            datacustomer
        }
    }
}

export default function Create({ datatype, dataproperty,datacustomer }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const checkcustomer = useSelector((state) => state.checkcustomer)
    const customerform = useSelector((getTodos) => getTodos.todos.customerform)
    const customerdata =  datacustomer.map(res=>{
        const object = {
            label : res.firstname + " " + res.lastname,
        }
        return object;
    })
    const [type, newtype] = useState('');
    const [property, setproperty] = useState('');
    const eventcustomer = async (e) => {
        dispatch(customercheck(e.target.value));
    }
    const backhome = ()=>{
        router.push('/');
    }

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body px-3 pb-12">
                                <div xs={12}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">ประเภทลูกค้า</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={checkcustomer}
                                        >
                                            <FormControlLabel value="none" onChange={(e) => eventcustomer(e)} control={<Radio />} label="ลูกค้าใหม่" />
                                            <FormControlLabel value="new" onChange={(e) => eventcustomer(e)} control={<Radio />} label="ลูกค้าเก่า" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                {

                                    customerform == 'none' ? (
                                        <div xs={12}>
                                            <div className="form-group" >
                                                <FormControl margin="dense" sx={{ mr: 1 }} className="col-5">
                                                    <TextField id="outlined-basic" label="ชื่อ" variant="outlined" />

                                                </FormControl>

                                                <FormControl margin="dense" className="col-6">
                                                    <TextField id="outlined-basic" label="นามสกุล" variant="outlined" />

                                                </FormControl>
                                            </div>
                                            <FormControl margin="dense" sx={{ mr: 1 }} className="col-5">
                                                <TextField id="outlined-basic" label="เบอร์โทรศัพท์" variant="outlined" />

                                            </FormControl>

                                            <FormControl margin="dense" className="col-6">
                                                <TextField id="outlined-basic" label="อีเมล์" variant="outlined" />

                                            </FormControl>

                                        </div>
                                    ) : (
                                        ''
                                    )}
                                {
                                    customerform == 'new' ? (
                                        <div xs={12}>
                                            <FormControl variant="standard" fullWidth>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={customerdata}
                                                 
                                                    renderInput={(params) => <TextField {...params} label="ค้นหารายชื่อ" />}
                                                />
                                            </FormControl>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                <br></br>
                                <div xs={12}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel id="demo-simple-select-label">โครงการ</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={property}
                                            onChange={(event) => setproperty(event.target.value)}
                                        >
                                            {dataproperty.map((datapropertys) => (
                                                <MenuItem  key={datapropertys} value={datapropertys.id} >{datapropertys.propertytype}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <br></br>
                                <div xs={12}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel id="demo-simple-select-label">ประเภท</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type}
                                            onChange={(event) => newtype(event.target.value)}
                                        >
                                            {datatype.map((datatypes) => (
                                                <MenuItem  key={datatypes} value={datatypes.id} >{datatypes.type_name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <br></br>
                                <div xs={12}>
                                    <FormControl fullWidth>
                                        <TextField id="outlined-basic" label="เรื่อง" variant="outlined" />

                                    </FormControl>
                                </div>
                                <br></br>
                                <div xs={12}>
                                    <FormControl fullWidth>
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={3}
                                            placeholder="รายละเอียด"
                                            style={{ width: "100%" }}
                                        />
                                    </FormControl>
                                </div>
                                <br></br>
                                <div xs={12}>
                                    <FormControl fullWidth>
                                        <TextField id="outlined-basic" label="remark (ถ้ามี ประเภท งานด่วน)" variant="outlined" />
                                    </FormControl>
                                </div>
                                <br></br>
                                <div xs={12}>
                                <Button sx={{ mr: 1 }} variant="contained">บันทึกข้อมูล</Button>
                                <Button onClick={() => backhome()} variant="outlined">ยกเลิก/กลับหน้าหลัก</Button>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


