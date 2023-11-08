import { AllUserStats } from '../AllUserStats';
import { createFullUsers } from '../../lib';
import { COURSES } from '../../utils/constants/mock/courses';

import { USERS } from '../../utils/constants/mock/users';
import { ONBORDING_PROGRAMMS } from '../../utils/constants/mock/onbordingProgramm';

export const Dashboard = () => {
  console.log(createFullUsers(USERS, COURSES, ONBORDING_PROGRAMMS))
  return (
    <section style={{ width: '100%', margin: '0 auto' }}>
      <AllUserStats />
    </section>
  );
};
