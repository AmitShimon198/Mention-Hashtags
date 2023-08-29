import React, { useState, useEffect, FunctionComponent } from 'react';

// Define the prop types for our components
interface User {
    id: number;
    name: string;
    isAuthenticated: boolean;
}

interface UserProps {
    user: User | null;
}
interface HOCProps {
    userName: string;
    pass: string;
}
const users: any = {
    'amit&pass': {
        id: 1,
        name: 'John Doe',
        isAuthenticated: true,
    }
}

const withAuthentication = <Props extends HOCProps>(WrappedComponent: FunctionComponent<Props & UserProps>) => {
    return (props: Props) => {
        const [user, setUser] = useState<User | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            // Simulate a get user authentication request after user enters userName & password
            setTimeout(() => {
                setUser(users[`${props.userName}&${props.pass}`]);
                setLoading(false);
            }, 1000);
        }, []);
        //when we try authenticate display loading.
        if (loading) {
            return <div>Loading...</div>;
        }
        // if user not authenticate we will redirect him to authentication page
        if (!user || !user.isAuthenticated) {
            return <div>Need Authenticate...(redirect to authentication page)</div>;
        }
        //if user authenticate we will render after auth component
        return <WrappedComponent user={user} {...props} />;
    };
};

const UserProfile: React.FunctionComponent<UserProps> = ({ user }) => {
    return <div>Welcome back, {user?.name}!</div>;
};

const EnhancedUserProfile = withAuthentication(UserProfile);

export default EnhancedUserProfile;
