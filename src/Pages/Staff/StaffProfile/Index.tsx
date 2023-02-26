import { useEffect, useState } from 'react'
import { API_SEVICES } from '../../../config/services';
import { API_CONSTANT } from '../../../Constant/EndPoints';
import { AxiosError, AxiosResponse } from 'axios'
import { ActionIcon, Button, Text, Grid, Group, Menu, Table } from '@mantine/core';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const [fineData, setFineData] = useState<any>([])
    const [id, setID] = useState<string>('')
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('Token')) {
            navigate('/')
        }
        Get_FineList()
    }, [])
    const Get_FineList = () => {
        API_SEVICES.GetRequest(
            API_CONSTANT.GET_ALL_FINE_LIST,
            (res: AxiosResponse) => {
                console.log(res.data)
                setFineData(res.data)
            },
            (err: AxiosError) => {
                console.log(err)
            },

        );
    }
    const RowData = fineData.map((element: any, i: number) => {
        return <tr key={i}>
            <td>{element.RegNo}</td>
            <td>{element.reason}</td>
            <td>{element.status}</td>
            <td>{element.amount}</td>
            <td>{element.date}</td>

            <td><Button size='xs' onClick={() => {
                setID(element._id)
            }}  >update</Button></td>
        </tr>
    })
    return (
        <Grid>
            <Grid.Col xs={12} p={20} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >

                <Button
                    size="xs"
                    leftIcon={<AiFillPlusCircle color='cyan' />}
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                >Create Fine</Button>
                <Text>Total : 500</Text>
                <Text>Total : 500</Text>
                <Text>Total : 500</Text>

                <Group position='apart' >
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                            <ActionIcon>
                                <BsThreeDotsVertical size={100} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item color="red" icon={<BiLogOut />}
                                onClick={() => {
                                    localStorage.clear()
                                    navigate('/')
                                }}>
                                Log Out
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Grid.Col>
            <Grid.Col xs={12} mt={0} >
                <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>
                        <tr>
                            <th>Register Number</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Data</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>{RowData}</tbody>
                </Table>
            </Grid.Col>

        </Grid>
    )
}

export default Index