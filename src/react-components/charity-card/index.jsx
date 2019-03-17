import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    card: {
        width: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    center: {
        textAlign: 'center',
    }
});

class CharityCard extends React.Component {
    state = {expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({expanded: !state.expanded}));
    };

    render() {
        const {classes, title, subheader, image, blurb, cdLink} = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={subheader}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography component="p">
                        {blurb}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Button href={cdLink} classes={classes.right} variant="contained" color="primary">
                        View Profile
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

CharityCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharityCard);
