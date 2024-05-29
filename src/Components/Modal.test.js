
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const projectData = {
    id: 1,
    title: 'Test Project',
    description: 'This is a test project',
    images: ['image1.jpg', 'image2.jpg']
  };

  it('renders modal correctly with project data', () => {
    const onClose = jest.fn();
    const { getByText, getByTestId } = render(
      <Modal projectData={projectData} onClose={onClose} />
    );

    expect(getByText('Test Project')).toBeInTheDocument();
    expect(getByText('This is a test project')).toBeInTheDocument();
    expect(getByTestId('modal-image-0')).toHaveAttribute('src', 'image1.jpg');
    expect(getByTestId('modal-image-1')).toHaveAttribute('src', 'image2.jpg');
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByLabelText } = render(
      <Modal projectData={projectData} onClose={onClose} />
    );

    fireEvent.click(getByLabelText('Close modal'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when modal background is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal projectData={projectData} onClose={onClose} />
    );

    fireEvent.click(getByTestId('modal-background'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes modal when Escape key is pressed', () => {
    const onClose = jest.fn();
    render(
      <Modal projectData={projectData} onClose={onClose} />
    );

    fireEvent.keyDown(document, { key: 'Escape', keyCode: 27 });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
