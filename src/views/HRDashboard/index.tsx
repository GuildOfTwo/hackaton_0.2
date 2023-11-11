// import ProfileEdit from '../../components/ProfileEdit';
import { useAppSelector } from '../../hooks';
import { AllUserCharts } from '../AllUserCharts';

export const HRDashboard = () => {
  const userRoles = useAppSelector((store) => store.user.user?.accessRoles);
  const userRole = userRoles?.includes('HR');
  if (userRole)
    return (
      <section style={{ width: '100%', margin: '0 auto' }}>
        <AllUserCharts />
      </section>
    );
  // if (!userRole) return (
  //   <section style={{ width: '100%', margin: '0 auto' }}>
  //     <ProfileEdit />
  //   </section>
  // )
};
