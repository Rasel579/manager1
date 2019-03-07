import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render(){
        return
(
            <Card>
                <CardSection>
                    <Input 
                      label='name'
                      placeholder='Jane'

                    />
                </CardSection>
                   <Input
                     label="Phone"
                     placeholder="5555-555-555"
                   />
                <CardSection>
                    
                </CardSection>

                <CardSection>
                    
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;