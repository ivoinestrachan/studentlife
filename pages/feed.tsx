import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const feed = () => {
    return (
        <div className='ml-8'>Filter Selection
                <div className="text-start text-[32px] font-bold mt-20 mb-3">Past Week:</div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://webartdevelopers.com/blog/wp-content/uploads/2018/12/morphing-play-button.png"
                        alt="Play Button"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Math Assignment 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                May 15, 2023, 10:00 am - 10:45 am PST
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className="text-start text-[32px] font-bold mt-20 mb-3">Past Month:</div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://webartdevelopers.com/blog/wp-content/uploads/2018/12/morphing-play-button.png"
                        alt="Play Button"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Science Assignment 7
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                April 12, 2023, 11:00 am - 11:45 am PST
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className="text-start text-[32px] font-bold mt-20 mb-3">Past Year:</div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://webartdevelopers.com/blog/wp-content/uploads/2018/12/morphing-play-button.png"
                        alt="Play Button"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                History Homework 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                June 18, 2022, 09:00 am - 09:45 am PST
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
    );
}

export default feed;