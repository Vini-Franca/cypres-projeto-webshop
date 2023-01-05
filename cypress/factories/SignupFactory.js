import { faker } from '@faker-js/faker';

export default {
  client_data: function () {
    var data = {
      first_name: "Angela",
      last_name: "Davis",
      email: "angela.davis.teste@teste.com",
      password: "teste@teste",
      confirm_password: "teste@teste",
    };
    return data;
  },

  faker_data: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var faker_data = {
      
      first_name: `${firstName}` ,
      last_name: `${lastName}`,
      email: faker.internet.email(firstName),
      password: "teste@teste",
      confirm_password: "teste@teste",
    };
    return faker_data;
  },
};
