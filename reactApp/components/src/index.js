import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                author='Sam' 
                timeAgo='Today at 4:45PM' 
                content='Nice blog post'
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo='2 minute ago' 
                    content='I like the subject'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            o

            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    timeAgo='Yesterday at 1:25PM' 
                    content='I like this writting'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
                author='Lita' 
                timeAgo='2 Years ago' 
                content='I like this content'
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
