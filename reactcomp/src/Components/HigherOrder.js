import React from 'react';

const UpdatedComp = OriginalComp =>{    
    
    class NewComp extends React.Component {
      render() {
        return <OriginalComp user="This user"></OriginalComp>
      }
    }
    return NewComp;
}

export default UpdatedComp;