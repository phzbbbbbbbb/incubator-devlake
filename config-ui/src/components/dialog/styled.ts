/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import styled from '@emotion/styled'
import { Dialog } from '@blueprintjs/core'

export const Container = styled(Dialog)`
  position: relative;
  background-color: #fff;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  padding: 12px 0;
  border-bottom: 1px solid #dbe4fd;
  box-shadow: none;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
  }

  & > span {
    cursor: pointer;
  }
`

export const Body = styled.div``

export const Footer = styled.div``
