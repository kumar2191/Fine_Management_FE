import { Grid, Modal, Table, Title } from '@mantine/core';
type ModelProps = {
    onClose: any;
    show: boolean;
    Data?: any
};
const Index: React.FC<ModelProps> = (props) => {
    const { onClose, show, Data } = props


    const Rows = Data.map((element: any, i: number) => {
        return <tr key={i}>
            <td>{element.reason}</td>
            <td>{element.RegNo}</td>
            <td>{element.status}</td>
            <td>{element.amount}</td>

        </tr>
    })

    return (
        <Modal
            closeOnClickOutside={false}
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"

            overlayOpacity={0.55}
            overlayBlur={3}
            size="lg"
            opened={show}
            onClose={
                () => {
                    onClose()
                }

            }
            overflow="outside"
            radius={10}
            title={
                <>
                    <Title order={3}>Fine List</Title>
                </>
            }

        >
            <Grid>
                <Table captionSide='bottom' >
                    {
                        Rows.length > 0 ? null : <caption>No Fine Data</caption>
                    }
                    <thead>
                        <tr>
                            <th>Reason</th>
                            <th>Register Number</th>
                            <th>Paid Status</th>
                            <th>Amount</th>
                        </tr>
                        <tbody>
                            {
                                Rows.length > 0 ? Rows :
                                    null
                            }
                        </tbody>
                    </thead>
                </Table>

            </Grid>
        </Modal>
    )
}

export default Index