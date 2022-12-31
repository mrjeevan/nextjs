import { IProduct } from '../../Interfaces/products'
import {products} from "../../requestsHandler/products"
import Card from '../../components/Card'
import { Grid } from '@mui/joy'

type Props = { productsData: IProduct[] }
export default function index({ productsData }: Props) {
    console.log(productsData)
    return (
        <div>
            <Grid container spacing={2}>
                {
                    productsData.map((product) => {
                        return (
                            <Grid key={product.id}>
                                <Card  data={product} />
                            </Grid >
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export async function getServerSideProps() {
    let responseData = await products()
    return {
        props: { productsData: responseData }, // will be passed to the page component as props
    }
}