import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Grid from '@material-ui/core/Grid';

const Comment = (props) => {
    // const first10 = fakeData.slice(0, 10);
    console.log(fakeData);
    const {body, id, name} = props.comment;
    const [profiles, setProfiles] = useState(fakeData);
    return (
        <div>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
                <div style={{display: 'flex',borderBottom: '1px solid lightgray'}}>
                    {/* Comment Image */}
                    <div style={{marginTop:'20px'}}>
                        {
                            profiles.map((profile) => {
                                if (id === profile.id) {
                                    return <img src={profile.img} alt="Girl in a jacket" width="70" height="70" style={{borderRadius: '50%'}}></img>
                                }
                            })
                            
                        }
                    </div>
                    {/* Comment body */}
                    <div style={{marginLeft:'20px'}}>
                       <h5 style={{marginBottom:'0px'}}>{name}</h5>
                       <p>{body}</p>
                    </div>
                </div>
          </Grid> 
          <Grid item xs={1}></Grid>
        </Grid>
        </div>
    );
};

export default Comment;