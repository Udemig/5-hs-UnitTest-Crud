import {
  getByLabelText,
  render,
  screen,
} from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('form gönderilince tabloya kullanı eklenir', async () => {
  render(<App />);

  // gerekli elemanlar çağrılır
  const name = screen.getByLabelText('İsim');
  const mail = screen.getByLabelText('Email');
  const button = screen.getByRole('button');

  // name alanını doldur
  await user.click(name);
  await user.keyboard('bilal');

  // maili doldur
  await user.click(mail);
  await user.keyboard('bilaltest@gmail.com');

  // formu gönder
  await user.click(button);

  // "bilal" ismiyle ekrana basılmış bir hücre olduğunu doğrular
  const nameCell = screen.getByRole('cell', { name: 'bilal' });

  // "bilaltest" mailiyle ekran basılmış bir hücre olduğunu doğrular
  const mailCell = screen.getByRole('cell', {
    name: 'bilaltest@gmail.com',
  });

  // hücreler dökumanda bulunuyor mu kontrol et
  expect(nameCell).toBeInTheDocument();
  expect(mailCell).toBeInTheDocument();
});
