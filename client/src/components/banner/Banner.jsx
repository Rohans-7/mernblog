import {Box,Typography,styled} from '@mui/material';

const Image=styled(Box)`
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Heading=styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`
const subHeading=styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`

const Banner=()=>{
    return(
        <Image>
            <Heading>Blog</Heading>
            <subHeading>Code for Interview</subHeading>
        </Image>
    )
}

export default Banner;