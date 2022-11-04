import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const defaultValues = {
  ingredients: '',
  description: '',
  unit: '',
};

const IngredientEditPage = () => {
  const params = useParams();
  const history = useHistory();
  const [ingredients, setIngredients] = useState(null);
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    (async () => {
      try {
        const ingredientId = params.ingredientId;
        if (ingredientId) {
          const response = await axiosClient.get(`/ingredients/${ingredientId}`);
          delete response.token;
          reset(response);
          setIngredients(response);
        }
      } catch (error) {}
    })();
  }, []);

  const onSubmitIngredient = async (formValues) => {
    if (formValues) {
      try {
        const response = await axiosClient.post('/ingredient', {
          ...formValues,
        });
        history.push('/ingredients');
      } catch (error) {
        console.log(error);
      }
    }
    console.log({ formValues });
  };

  return (
    <Container style={{ maxWidth: '700px' }}>
      <h2 style={{ marginBottom: '30px' }}>Add new Ingredient</h2>
      <Form id='ingredientForm' onSubmit={handleSubmit(onSubmitIngredient)}>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Controller
            control={control}
            name='ingredients'
            render={({ field }) => {
              return <Form.Control {...field} />;
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Controller
            control={control}
            name='description'
            render={({ field }) => {
              return <Form.Control as='textarea' {...field} />;
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Unit</Form.Label>
          <Controller
            control={control}
            name='unit'
            render={({ field }) => {
              return <Form.Control {...field} />;
            }}
          />
        </Form.Group>
        <Button type='submit' form='ingredientForm'>
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default IngredientEditPage;
