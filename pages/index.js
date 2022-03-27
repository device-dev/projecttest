import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import {
  Button,
  TableBody,
  TableCell,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  Paper
} from '@mui/material';
import {
  setModal,
} from '../libs/member'
import Modalcreate from '../components/createCase'
import axios from 'axios'

export async function getStaticProps() {
  const datacase = await axios.get('http://localhost:3000/api/datacase', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  const casedata = datacase.data;

  return {
    props: {
      casedata
    }
  }
}





export default function Home({ casedata }) {

  const dispatch = useDispatch()
  const router = useRouter()


  const createdetail = (e) => {

    router.push('create')
  }
  return (
    <>


      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">รายการ</h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div align="right">
                  <Button variant="contained" onClick={() => createdetail()}>เพิ่มข้อมูล</Button>
                </div>
                <div className="table-responsive p-0">
                  <TableContainer  component={Paper}>
                  <Table className="table align-items-center mb-0">
                  <TableHead>
                   <TableRow>
                        {/* {dataproperty.map((datapropertys) => ( */}
                        <TableCell className="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7">ลำดับ</TableCell>
                        <TableCell className="text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ประเภท</TableCell>
                        <TableCell className="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7 ps-2">คำร้อง</TableCell>
                        <TableCell className="text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">รายละเอียด</TableCell>
                        <TableCell className="text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ชื่อลูกค้า</TableCell>

                        <TableCell className="text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">สถานะ</TableCell>
                        <TableCell className="text-secondary text-center opacity-7"></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {casedata.map((datacases, i) => (
                       <TableRow key={i}>
                          <TableCell className="text-center">{i + 1}</TableCell>
                          <TableCell className="text-center">{datacases.type_name}</TableCell>
                          <TableCell className="text-center">{datacases.title}</TableCell>
                          <TableCell className="text-center">{datacases.type_detail}</TableCell>
                          <TableCell className="text-center">{datacases.firstname} {datacases.lastname}</TableCell>
                          <TableCell className="text-center">{datacases.status}</TableCell>
                        </TableRow>
                      ))}
                   </TableBody>
                  </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Modalcreate />
    </>
  )

}


