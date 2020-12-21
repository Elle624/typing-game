import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

it('should render correctly', () => {
  render(<App />);

  const title = screen.getByText('How fast do you type?');
  const timeDisplay = screen.getByText('Time remaining: 10');
  const startButton = screen.getByRole('button');
  const wordCount = screen.getByText('Word Count: 0')

  expect(timeDisplay).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
  expect(wordCount).toBeInTheDocument();
});

it('should count amount of words', async () => {
  jest.useFakeTimers();
  jest.runAllTimers();
  render(<App />);

  const startButton = screen.getByRole('button');
  const textArea = screen.getByRole('textbox')
  userEvent.click(startButton);
  userEvent.type(textArea, 'This is an app to test type     speed');

  await waitFor(() => expect(screen.getByText('Word Count: 8')).toBeInTheDocument())
})